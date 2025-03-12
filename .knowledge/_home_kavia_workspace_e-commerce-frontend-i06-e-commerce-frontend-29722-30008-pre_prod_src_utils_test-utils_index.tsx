{"is_source_file": true, "format": "TypeScript", "description": "This file contains utility functions and a custom render method for testing React components, integrating Redux and styled-components.", "external_files": ["@testing-library/react", "redux/slices/productSlice", "redux/slices/filterSlice", "redux/slices/cartSlice", "styles/theme"], "external_methods": ["configureStore", "render"], "published": ["createMockProduct", "createMockProducts", "renderWithProviders"], "classes": [], "methods": [{"name": "createTestStore", "description": "Creates a Redux store with preloaded state and the necessary reducers."}, {"name": "renderWithProviders", "description": "Custom render function that wraps the component with necessary providers like Redux and Theme."}, {"name": "createMockProduct", "description": "Creates a mock product object for testing, with optional overrides."}, {"name": "createMockProducts", "description": "Creates an array of mock product objects for testing based on the given count."}], "calls": ["window.history.pushState", "render"], "search-terms": ["renderWithProviders", "createMockProduct", "createMockProducts", "createTestStore"], "state": 2, "file_id": 59, "knowledge_revision": 139, "git_revision": "", "revision_history": [{"137": ""}, {"138": ""}, {"139": ""}], "ctags": [], "filename": "/home/kavia/workspace/e-commerce-frontend-i06-e-commerce-frontend-29722-30008-pre_prod/src/utils/test-utils/index.tsx", "hash": "1865857d8178d45424bee37998c24051", "format-version": 4, "code-base-name": "default"}