import { Day } from '../enums/day';

export type Event = {
  /**  Event title */
  event: string;
  day: Day;
  start_date: string | null;
  end_date: string | null;
  week: string | null;
};
