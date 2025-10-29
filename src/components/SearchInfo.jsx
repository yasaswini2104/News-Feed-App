const SearchInfo = ({ searchQuery, totalResults, resultsCount }) => {
  if (!searchQuery) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-blue-800 dark:text-blue-200">
            <span className="font-semibold">{totalResults.toLocaleString()}</span> results found for{' '}
            <span className="font-semibold">"{searchQuery}"</span>
          </p>
        </div>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Showing {resultsCount} articles
        </p>
      </div>
    </div>
  );
};

export default SearchInfo;