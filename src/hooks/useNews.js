import { useState, useEffect, useCallback } from 'react';
import { getTopHeadlines, searchNews } from '../services/newsApi';
import { parseApiError } from '../utils/helpers';
import { ARTICLES_PER_PAGE } from '../utils/constants';

const useNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let response;
      
      if (searchQuery.trim()) {
        response = await searchNews({
          q: searchQuery,
          page: currentPage,
          pageSize: ARTICLES_PER_PAGE,
        });
      } else {
        response = await getTopHeadlines({
          category: selectedCategory,
          page: currentPage,
          pageSize: ARTICLES_PER_PAGE,
        });
      }

      setArticles(response.articles || []);
      setTotalResults(response.totalResults || 0);
    } catch (err) {
      const errorMessage = parseApiError(err);
      setError(errorMessage);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, currentPage]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); 
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); 
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const refreshNews = () => {
    fetchNews();
  };

  return {
    articles,
    loading,
    error,
    totalResults,
    currentPage,
    searchQuery,
    selectedCategory,
    handleSearch,
    handleCategoryChange,
    handlePageChange,
    refreshNews,
  };
};

export default useNews;