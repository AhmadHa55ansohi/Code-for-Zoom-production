import { useState, useMemo } from 'react';
import type { Event, CategoryFilter } from '../types/Event';

export const useFilteredEvents = (events: Event[]) => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(event => event.category === categoryFilter);
    }

    // Apply search filter (location name or event name)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(query) ||
        event.location.city.toLowerCase().includes(query) ||
        event.location.country.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [events, categoryFilter, searchQuery]);

  return {
    filteredEvents,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery
  };
};