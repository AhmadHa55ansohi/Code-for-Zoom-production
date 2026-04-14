import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { Event } from '../../types/Event';

// Fix for default marker icons in Leaflet with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface EventMapProps {
  events: Event[];
  selectedEvent?: Event;
  onEventSelect: (event: Event) => void;
}

// Component to handle map view updates when an event is selected
const MapUpdater: React.FC<{ selectedEvent?: Event }> = ({ selectedEvent }) => {
  const map = useMap();
  
  useEffect(() => {
    if (selectedEvent) {
      map.flyTo(selectedEvent.location.coordinates, 8, {
        duration: 1.5
      });
    }
  }, [selectedEvent, map]);
  
  return null;
};

export const EventMap: React.FC<EventMapProps> = ({ events, selectedEvent, onEventSelect }) => {
  const defaultCenter: [number, number] = [50, 10]; // Center of Europe
  const defaultZoom = 4;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {events.map(event => (
        <Marker
          key={event.id}
          position={event.location.coordinates}
          eventHandlers={{
            click: () => onEventSelect(event)
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold text-sm">{event.name}</h3>
              <p className="text-xs text-gray-600">{event.location.city}, {event.location.country}</p>
              <p className="text-xs text-gray-500 mt-1">Category {event.category}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      
      <MapUpdater selectedEvent={selectedEvent} />
    </MapContainer>
  );
};