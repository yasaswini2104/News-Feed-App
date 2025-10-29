const SearchTips = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Search Tips
      </h3>
      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
        <li>• Use specific keywords for better results</li>
        <li>• Try searching for topics like "climate change", "technology", or "sports"</li>
        <li>• Search results update automatically as you type</li>
      </ul>
    </div>
  );
};

export default SearchTips;