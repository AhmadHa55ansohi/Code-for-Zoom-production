import React from 'react';
import type { Event } from '../../types/Event';
import { EventCard } from './EventCard';

interface EventListProps {
  events: Event[];
  selectedEventId?: string;
  onSelectEvent: (event: Event) => void;
}

export const EventList: React.FC<EventListProps> = ({ 
  events, 
  selectedEventId, 
  onSelectEvent 
}) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No events found</p>
        <p className="text-sm text-gray-400 mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          isSelected={selectedEventId === event.id}
          onSelect={onSelectEvent}
        />
      ))}
    </div>
  );
};