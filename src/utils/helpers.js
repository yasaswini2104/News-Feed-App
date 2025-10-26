/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Get placeholder image for articles without images
 * @returns {string} Placeholder image URL
 */
export const getPlaceholderImage = () => {
  return 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop';
};

/**
 * Handle image error by setting placeholder
 * @param {Event} event - Image error event
 */
export const handleImageError = (event) => {
  event.target.src = getPlaceholderImage();
};

/**
 * Parse API error and return user-friendly message
 * @param {Error} error - API error object
 * @returns {string} User-friendly error message
 */
export const parseApiError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        return 'Invalid API key. Please check your configuration.';
      case 429:
        return 'Rate limit exceeded. Please wait a moment and try again.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return error.response.data?.message || 'An error occurred while fetching news.';
    }
  } else if (error.request) {
    return 'Network error. Please check your internet connection.';
  } else {
    return error.message || 'An unexpected error occurred.';
  }
};