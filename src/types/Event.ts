export type Event = {
  id: string;
  name: string;
  location: {
    city: string;
    country: string;
    coordinates: [number, number];
  };
  category: 'A' | 'B';
  date: string;
  imageUrl?: string;
  description?: string;
};

export type CategoryFilter = 'all' | 'A' | 'B';