import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;

const newsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

/**
 * Fetch top headlines
 * @param {Object} params - Query parameters
 * @param {string} params.country - Country code (default: 'us')
 * @param {string} params.category - News category
 * @param {string} params.q - Search query
 * @param {number} params.page - Page number
 * @param {number} params.pageSize - Number of articles per page
 */
export const getTopHeadlines = async (params = {}) => {
  try {
    const response = await newsApi.get('/top-headlines', {
      params: {
        country: 'us',
        pageSize: 12,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

/**
 * Search for news articles
 * @param {Object} params - Query parameters
 * @param {string} params.q - Search query (required)
 * @param {string} params.sortBy - Sort option (relevancy, popularity, publishedAt)
 * @param {number} params.page - Page number
 * @param {number} params.pageSize - Number of articles per page
 */
export const searchNews = async (params = {}) => {
  try {
    const response = await newsApi.get('/everything', {
      params: {
        sortBy: 'publishedAt',
        pageSize: 12,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
};

/**
 * Get news by category
 * @param {string} category 
 * @param {number} page 
 */
export const getNewsByCategory = async (category, page = 1) => {
  return getTopHeadlines({
    category: category.toLowerCase(),
    page,
  });
};

export default newsApi;