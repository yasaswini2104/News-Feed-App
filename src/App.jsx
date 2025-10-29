import useNews from './hooks/useNews';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import EmptyState from './components/EmptyState';
import NewsGrid from './components/NewsGrid';
import SearchBar from './components/SearchBar';
import SearchInfo from './components/SearchInfo';

function App() {
  const {
    articles,
    loading,
    error,
    totalResults,
    searchQuery,
    selectedCategory,
    handleSearch,
    refreshNews,
  } = useNews();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                <span className="mr-2">📰</span>
                News Feed App
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Stay updated with the latest news
              </p>
            </div>
            
            {/* Refresh Button */}
            <button
              onClick={refreshNews}
              disabled={loading}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Refresh news"
            >
              <svg 
                className={`w-5 h-5 text-gray-700 dark:text-gray-300 ${loading ? 'animate-spin' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-4">
            <SearchBar 
              onSearch={handleSearch} 
              initialValue={searchQuery}
              placeholder="Search for news articles..."
            />
          </div>

          {/* Stats Bar */}
          {!loading && !error && totalResults > 0 && !searchQuery && (
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-white mr-1">
                  {totalResults.toLocaleString()}
                </span>
                articles available
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                Category: 
                <span className="font-semibold text-gray-900 dark:text-white ml-1 capitalize">
                  {selectedCategory}
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Results Info */}
        {!loading && !error && searchQuery && (
          <div className="mb-6">
            <SearchInfo 
              searchQuery={searchQuery}
              totalResults={totalResults}
              resultsCount={articles.length}
            />
          </div>
        )}

        {loading && <LoadingSpinner message="Fetching latest news..." />}

        {error && <ErrorMessage message={error} onRetry={refreshNews} />}

        {!loading && !error && articles.length === 0 && (
          <EmptyState
            message={searchQuery ? `No results found for "${searchQuery}"` : "No articles found"}
            description={
              searchQuery 
                ? "Try different keywords or check your spelling."
                : "Try adjusting your search criteria or check back later for new content."
            }
          />
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="space-y-6">
            <NewsGrid articles={articles} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            Powered by News API • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;