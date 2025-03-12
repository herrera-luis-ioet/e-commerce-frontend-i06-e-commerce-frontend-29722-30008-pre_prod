{"is_source_file": true, "format": "TypeScript/React", "description": "A React functional component that provides filtering and sorting options for products, allowing users to select a category, minimum price, maximum price, and sorting order.", "external_files": ["./ProductFilter.styles"], "external_methods": [], "published": ["ProductFilter"], "classes": [], "methods": [{"name": "ProductFilter", "description": "Functional component that takes onFilterChange and categories as props to manage product filtering.", "parameters": [{"name": "onFilterChange", "type": "(filters: FilterOptions) => void"}, {"name": "categories", "type": "string[]"}]}, {"name": "handleFilterChange", "description": "Handles changes to the filter inputs and updates the state accordingly.", "parameters": [{"name": "e", "type": "React.ChangeEvent<HTMLSelectElement | HTMLInputElement>"}]}], "calls": ["React.useState", "ProductFilterContainer"], "search-terms": ["ProductFilter", "filter options", "sorting"], "state": 2, "file_id": 19, "knowledge_revision": 39, "git_revision": "", "ctags": [], "filename": "/home/kavia/workspace/e-commerce-frontend-i06-e-commerce-frontend-29722-30008-pre_prod/src/components/ProductFilter/index.tsx", "hash": "ec209fd99520e258938dacde4e62cc8c", "format-version": 4, "code-base-name": "default", "revision_history": [{"39": ""}]}