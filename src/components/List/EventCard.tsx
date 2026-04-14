import React from 'react';
import type { Event } from '../../types/Event';

interface EventCardProps {
  event: Event;
  isSelected?: boolean;
  onSelect?: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isSelected, onSelect }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div
      onClick={() => onSelect?.(event)}
      className={`
        p-4 rounded-lg cursor-pointer transition-all duration-200
        ${isSelected 
          ? 'bg-blue-50 border-2 border-blue-500 shadow-md' 
          : 'bg-white border border-gray-200 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02]'
        }
      `}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg text-gray-800">{event.name}</h3>
        <span className={`
          px-2 py-1 rounded text-xs font-semibold
          ${event.category === 'A' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}
        `}>
          Category {event.category}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-2">
        📍 {event.location.city}, {event.location.country}
      </p>
      
      <p className="text-gray-500 text-xs">
        📅 {formatDate(event.date)}
      </p>
      
      {event.description && (
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {event.description}
        </p>
      )}
    </div>
  );
};