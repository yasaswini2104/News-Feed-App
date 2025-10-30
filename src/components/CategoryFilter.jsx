import { NEWS_CATEGORIES } from '../utils/constants';

const CategoryFilter = ({ selectedCategory, onCategoryChange, disabled = false }) => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Categories
      </h3>

      {/* Desktop: Horizontal scroll */}
      <div className="hidden md:flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {NEWS_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            disabled={disabled}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all
              ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            `}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.label}</span>
            {selectedCategory === category.id && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Mobile: Grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-2">
        {NEWS_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            disabled={disabled}
            className={`
              flex flex-col items-center justify-center gap-1 p-3 rounded-lg font-medium text-sm transition-all
              ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-xs">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;