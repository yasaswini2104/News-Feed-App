import { NEWS_CATEGORIES } from '../utils/constants';

const ActiveFilters = ({ searchQuery, selectedCategory, onClearSearch, onClearCategory }) => {
  const categoryInfo = NEWS_CATEGORIES.find(cat => cat.id === selectedCategory);
  const hasFilters = searchQuery || (selectedCategory && selectedCategory !== 'general');

  if (!hasFilters) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Active Filters:
          </span>

          {/* Search Filter */}
          {searchQuery && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search: "{searchQuery}"
              <button
                onClick={onClearSearch}
                className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5 transition-colors"
                title="Clear search"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}

          {/* Category Filter */}
          {selectedCategory && selectedCategory !== 'general' && categoryInfo && (
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">
              <span>{categoryInfo.icon}</span>
              Category: {categoryInfo.label}
              <button
                onClick={onClearCategory}
                className="hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full p-0.5 transition-colors"
                title="Clear category"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          )}
        </div>

        {/* Clear All */}
        {hasFilters && (
          <button
            onClick={() => {
              onClearSearch();
              onClearCategory();
            }}
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;