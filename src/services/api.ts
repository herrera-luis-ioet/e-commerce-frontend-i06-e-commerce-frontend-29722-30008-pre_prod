import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

/**
 * API Error Types
 */
export enum ApiErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  TIMEOUT = 'TIMEOUT',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Custom API Error class
 */
export class ApiError extends Error {
  type: ApiErrorType;
  status: number | null;
  data: any;

  constructor(message: string, type: ApiErrorType = ApiErrorType.UNKNOWN, status: number | null = null, data: any = null) {
    super(message);
    this.name = 'ApiError';
    this.type = type;
    this.status = status;
    this.data = data;
  }
}

/**
 * Base API configuration
 */
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';
const API_TIMEOUT = 30000; // 30 seconds

/**
 * API client instance
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

/**
 * Request interceptor for API calls
 */
apiClient.interceptors.request.use(
  (config) => {
    // Add auth tokens if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add timestamp to prevent caching (if needed)
    if (config.method?.toLowerCase() === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }
    
    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, config);
    }
    
    return config;
  },
  (error) => {
    // Log request error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Request Error:', error);
    }
    return Promise.reject(new ApiError('Request configuration error', ApiErrorType.UNKNOWN));
  }
);

/**
 * Response interceptor for API calls
 */
apiClient.interceptors.response.use(
  (response) => {
    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response);
    }
    return response;
  },
  (error: AxiosError) => {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Response Error:', error);
    }
    
    // Handle different error scenarios
    if (!error.response) {
      // Network error or timeout
      if (error.code === 'ECONNABORTED') {
        return Promise.reject(new ApiError('Request timeout', ApiErrorType.TIMEOUT));
      }
      return Promise.reject(new ApiError('Network error', ApiErrorType.NETWORK_ERROR));
    }
    
    const { status, data } = error.response;
    let errorType: ApiErrorType;
    let errorMessage: string;
    
    // Map HTTP status codes to error types
    switch (status) {
      case 401:
        errorType = ApiErrorType.UNAUTHORIZED;
        errorMessage = 'Unauthorized access';
        // Handle unauthorized access
        localStorage.removeItem('auth_token');
        // You could dispatch an action to redirect to login here
        break;
      case 403:
        errorType = ApiErrorType.FORBIDDEN;
        errorMessage = 'Access forbidden';
        break;
      case 404:
        errorType = ApiErrorType.NOT_FOUND;
        errorMessage = 'Resource not found';
        break;
      case 500:
      case 502:
      case 503:
      case 504:
        errorType = ApiErrorType.SERVER_ERROR;
        errorMessage = 'Server error';
        break;
      default:
        errorType = ApiErrorType.UNKNOWN;
        errorMessage = 'An unexpected error occurred';
    }
    
    // Use error message from response if available
    if (data && typeof data === 'object') {
      if (data.message) {
        errorMessage = data.message;
      } else if (data.error) {
        errorMessage = typeof data.error === 'string' ? data.error : 'API Error';
      }
    }
    
    return Promise.reject(new ApiError(errorMessage, errorType, status, data));
  }
);

// PUBLIC_INTERFACE
/**
 * Generic API request function
 * 
 * @param config - Axios request configuration
 * @returns Promise with the response data
 * @throws ApiError on request failure
 */
export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient(config);
    return response.data;
  } catch (error) {
    // If it's already an ApiError, just rethrow it
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Otherwise, convert to ApiError if possible
    if (axios.isAxiosError(error)) {
      const apiError = error as AxiosError;
      const status = apiError.response?.status || null;
      const data = apiError.response?.data || null;
      
      throw new ApiError(
        apiError.message || 'API request failed',
        status ? mapStatusToErrorType(status) : ApiErrorType.UNKNOWN,
        status,
        data
      );
    }
    
    // For any other type of error
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown error',
      ApiErrorType.UNKNOWN
    );
  }
};

/**
 * Maps HTTP status code to ApiErrorType
 * 
 * @param status - HTTP status code
 * @returns Corresponding ApiErrorType
 */
function mapStatusToErrorType(status: number): ApiErrorType {
  switch (status) {
    case 401:
      return ApiErrorType.UNAUTHORIZED;
    case 403:
      return ApiErrorType.FORBIDDEN;
    case 404:
      return ApiErrorType.NOT_FOUND;
    case 408:
      return ApiErrorType.TIMEOUT;
    case 500:
    case 502:
    case 503:
    case 504:
      return ApiErrorType.SERVER_ERROR;
    default:
      return ApiErrorType.UNKNOWN;
  }
}
