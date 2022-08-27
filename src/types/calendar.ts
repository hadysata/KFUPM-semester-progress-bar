import { Event } from './event';

export type Calendar = {
  title: string;
  events: [Event] | [] | null;
};
