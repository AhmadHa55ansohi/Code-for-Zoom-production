import type { Event } from '../types/Event';

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Red Bull Air Race - Brussels',
    location: {
      city: 'Brussels',
      country: 'Belgium',
      coordinates: [50.8503, 4.3517]
    },
    category: 'A',
    date: '2024-06-15',
    description: 'High-speed aerial competition over Brussels'
  },
  {
    id: '2',
    name: 'Paris Air Challenge',
    location: {
      city: 'Paris',
      country: 'France',
      coordinates: [48.8566, 2.3522]
    },
    category: 'A',
    date: '2024-07-01',
    description: 'Spectacular air races near Eiffel Tower'
  },
  {
    id: '3',
    name: 'Bucharest Sky Grand Prix',
    location: {
      city: 'Bucharest',
      country: 'Romania',
      coordinates: [44.4268, 26.1025]
    },
    category: 'B',
    date: '2024-07-20',
    description: 'Thrilling races over Romanian capital'
  },
  {
    id: '4',
    name: 'Istanbul Wings',
    location: {
      city: 'Istanbul',
      country: 'Turkey',
      coordinates: [41.0082, 28.9784]
    },
    category: 'B',
    date: '2024-08-10',
    description: 'Cross-continental air racing experience'
  },
  {
    id: '5',
    name: 'Dubai Air Masters',
    location: {
      city: 'Dubai',
      country: 'UAE',
      coordinates: [25.2048, 55.2708]
    },
    category: 'A',
    date: '2024-11-15',
    description: 'Luxury air racing in the desert'
  },
  {
    id: '6',
    name: 'Ljubljana Air Festival',
    location: {
      city: 'Ljubljana',
      country: 'Slovenia',
      coordinates: [46.0569, 14.5058]
    },
    category: 'B',
    date: '2024-09-05',
    description: 'Picturesque races over Alpine landscapes'
  },
  {
    id: '7',
    name: 'Madrid Aerial Challenge',
    location: {
      city: 'Madrid',
      country: 'Spain',
      coordinates: [40.4168, -3.7038]
    },
    category: 'A',
    date: '2024-10-12',
    description: 'Fast-paced action over Spanish capital'
  },
  {
    id: '8',
    name: 'Athens Olympic Air Races',
    location: {
      city: 'Athens',
      country: 'Greece',
      coordinates: [37.9838, 23.7275]
    },
    category: 'B',
    date: '2024-09-25',
    description: 'Historic venues meet modern aviation'
  }
];