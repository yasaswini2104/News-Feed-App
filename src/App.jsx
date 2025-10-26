// import { useState } from 'react';
import useNews from './hooks/useNews';

function App() {
  const {
    articles,
    loading,
    error,
    totalResults,
    selectedCategory,
  } = useNews();

  return (
    <div className="min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            📰 News Feed App
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Category: {selectedCategory} | Total Results: {totalResults}
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading news...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-200">
            <p className="font-semibold">⚠️ Error</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No articles found.</p>
          </div>
        )}

        {!loading && articles.length > 0 && (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Found {articles.length} articles
            </p>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-xs">
              {JSON.stringify(articles[0], null, 2)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;