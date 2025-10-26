export const NEWS_CATEGORIES = [
  { id: 'general', label: 'General', icon: '📰' },
  { id: 'business', label: 'Business', icon: '💼' },
  { id: 'technology', label: 'Technology', icon: '💻' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { id: 'health', label: 'Health', icon: '🏥' },
  { id: 'science', label: 'Science', icon: '🔬' },
  { id: 'sports', label: 'Sports', icon: '⚽' },
];

export const ARTICLES_PER_PAGE = 12;

export const ERROR_MESSAGES = {
  FETCH_ERROR: 'Failed to fetch news articles. Please try again later.',
  SEARCH_ERROR: 'Failed to search articles. Please try again.',
  NO_RESULTS: 'No articles found. Try a different search term.',
  API_KEY_MISSING: 'API key is missing. Please check your environment variables.',
  RATE_LIMIT: 'Too many requests. Please wait a moment and try again.',
};