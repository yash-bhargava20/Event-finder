export interface Event {
  _id?: string;
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  maxParticipants: number;
  currentParticipants?: number;
}

export interface CreateEventInput {
  title: string;
  description: string;
  location: string;
  date: string;
  maxParticipants: number;
}
