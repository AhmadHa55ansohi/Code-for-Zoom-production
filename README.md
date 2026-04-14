# Air Race Events Explorer

A responsive web application for discovering international air racing events with map visualization and filtering.

## How to Run the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173/
Component Structure
src/
├── components/
│   ├── Map/EventMap.tsx       # Map with markers
│   ├── List/EventList.tsx     # Event list container
│   ├── List/EventCard.tsx     # Individual event card
│   ├── Layout/FilterBar.tsx   # Category filters
│   └── UI/SearchInput.tsx     # Search input
├── hooks/
│   └── useFilteredEvents.ts   # Filtering logic
├── types/Event.ts             # TypeScript interfaces
├── data/events.ts             # Mock data
└── App.tsx                    # Main layout


Data Model & CMS Integration
The data model is designed to easily connect to any headless CMS:
interface Event {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  category: 'A' | 'B';
  date: string;
  description?: string;  // Optional for CMS flexibility
}
To connect to a real CMS, replace src/data/events.ts with an API call:
// Example API integration
fetch('https://your-cms.com/events')
  .then(res => res.json())
  .then(data => setEvents(data));
  Trade-offs & Assumptions
Trade-off	Reason
Mock data instead of real API	Focus on frontend architecture, no backend setup
Leaflet instead of Google Maps	Free, no API keys required
No state management library	Simple enough for current scale
Fixed map height (500px)	Consistent UX across devices
Assumptions:

Modern browsers only

All events have valid coordinates

Categories are only 'A' and 'B' (easily extendable)
Features
 Interactive map with markers

 Click marker → highlight list item

 Click list item → map flies to location

 Filter by category (All, A, B)

 Search by event name or location

 Hover effects on cards

Responsive design (mobile/tablet/desktop)