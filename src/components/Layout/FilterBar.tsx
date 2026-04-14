import React from 'react';
import type { CategoryFilter } from '../../types/Event';

interface FilterBarProps {
  currentFilter: CategoryFilter;
  onFilterChange: (filter: CategoryFilter) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange }) => {
  const filters: { label: string; value: CategoryFilter }[] = [
    { label: 'Show all', value: 'all' },
    { label: 'Category A', value: 'A' },
    { label: 'Category B', value: 'B' }
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-2">Filter Events</h3>
      <div className="flex gap-2 flex-wrap">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentFilter === filter.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};