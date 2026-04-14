import { useState } from 'react';
import { EventMap } from './components/Map/EventMap';
import { EventList } from './components/List/EventList';
import { SearchInput } from './components/UI/SearchInput';
import { FilterBar } from './components/Layout/FilterBar';
import { useFilteredEvents } from './hooks/useFilteredEvents';
import { mockEvents } from './data/events.js';
import type { Event } from './types/Event';

function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const {
    filteredEvents,
    categoryFilter,
    setCategoryFilter,
    searchQuery,
    setSearchQuery
  } = useFilteredEvents(mockEvents);

  const handleEventSelect = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-800">Air Races / Events</h1>
        </div>
      </header>

      {/* Map Section - Full width on top */}
      <div className="w-full h-[500px] bg-gray-200">
        <EventMap
          events={filteredEvents}
          selectedEvent={selectedEvent}
          onEventSelect={handleEventSelect}
        />
      </div>

      {/* Content Section - Below the map */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Section - Side by side */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Search Location */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Location
            </label>
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by event or location..."
            />
          </div>

          {/* Filter Events */}
          <div className="flex-1">
            <FilterBar
              currentFilter={categoryFilter}
              onFilterChange={setCategoryFilter}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Found <span className="font-semibold text-blue-600">{filteredEvents.length}</span> events
          </p>
        </div>

        {/* Event List */}
        <EventList
          events={filteredEvents}
          selectedEventId={selectedEvent?.id}
          onSelectEvent={handleEventSelect}
        />
      </div>
    </div>
  );
}

export default App;