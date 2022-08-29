import console from 'console';
import { Endpoints } from '../constants/api_constants';
import { Calendar } from '../types/calendar';
import { Query } from '../types/query';
import { ApiHelper } from './api_helper';
import { DateHelper } from './date_helper';
import { DateTime } from 'luxon';

export class CalenderHelper {
  calendar: Calendar;
  daysOffset: number;

  constructor(calendar: Calendar, daysOffset = 0) {
    this.calendar = calendar;
    this.daysOffset = daysOffset;
  }

  protected getParsedStartDate(eventIndex: number): DateTime {
    return DateHelper.parseDate(this.calendar.events!.at(eventIndex)!.start_date!);
  }

  /**
   * It returns the first day of the calendar
   * @returns The first day of the calendar.
   */
  public getFirstDayDateInCalender(): DateTime {
    return this.getParsedStartDate(0);
  }

  /**
   * It returns the last day of the calendar
   * @returns The last day of the calendar.
   */
  public getLastDayDateInCalender(): DateTime {
    try {
      //Skipping the last event in the calendar because it's always referer to an event for the next semester
      return this.getParsedStartDate(this.calendar.events!.length - 2);
    } catch (error) {
      throw new Error(
        "(CalenderHelper/getLastDayDateInCalender): Couldn't find calendar events, this might be related to KFUPM calendar API",
      );
    }
  }

  public getTotalDaysInSemester(): number {
    const firstDay = this.getFirstDayDateInCalender();
    const lastDay = this.getLastDayDateInCalender();
    const daysInSemester = DateHelper.differenceBetweenDates(firstDay, lastDay);

    return daysInSemester;
  }

  public getWeeksInSemester(): number {
    const daysInSemester = this.getTotalDaysInSemester();

    return Math.round(daysInSemester / 7);
  }

  /**
   * It takes a calendar and returns the current day in the semester
   * @returns The current day in the semester.
   */
  public getCurrentDayInSemester(): number {
    let dateNow = DateTime.now();

    dateNow = dateNow.plus({ days: this.daysOffset });

    const firstDay = this.getFirstDayDateInCalender();
    const lastDay = this.getLastDayDateInCalender();

    const semesterDays = this.getTotalDaysInSemester();

    const currentDay = semesterDays - DateHelper.differenceBetweenDates(dateNow, lastDay);

    if (currentDay >= 0 && currentDay <= semesterDays) {
      return currentDay;
    } else {
      console.log(`first day is ${firstDay}`);

      console.log(`last day is ${lastDay}`);

      console.log(`dateNow is ${dateNow}`);

      console.log(`semester days is ${semesterDays}`);

      console.log(`current day is ${currentDay}`);

      throw new Error("Couldn't find a day in the calendar that matches the current day.");
    }
  }

  public getTodaysEvent(): string | undefined {
    let todaysDate = DateTime.now();

    todaysDate = todaysDate.plus({ days: this.daysOffset });

    for (const event of this.calendar.events!) {
      const eventDate = DateHelper.parseDate(event.start_date!);

      const isToday = DateHelper.isSameDay(todaysDate, eventDate);

      if (isToday) {
        return event.event; // Event title
      }
    }

    console.log("Couldn't find an event in the calendar that matches the current day.");
    return undefined;
  }

  /**
   * It takes a semester code and returns a calendar object
   * @param {string} semesterCode - The semester code for the semester you want to get the calender for.
   * @returns A promise of a Calendar object
   */
  public static async getCalender(semesterCode: string): Promise<Calendar | undefined> {
    const query: Query = { key: 'term_code', value: semesterCode };
    const result = await ApiHelper.get<Calendar>(Endpoints.CALENDER, query);

    if (result) {
      return result;
    } else {
      console.error(`(CalenderHelper/getCalender): Could not fetch ${semesterCode} calender`);

      return undefined;
    }
  }

  /**
   * It tries to get the current semester calendar
   * @returns The current semester calendar
   */
  public static async getCurrentSemesterCalender(): Promise<Calendar> {
    const dateNow = DateTime.now();

    const currentYear = dateNow.year;

    //TODO: Add better explanation
    // Try to get the current semester code by checking the past year and the next year if the calendar is between the current date
    for (let testYear = currentYear - 1; currentYear + 1 >= testYear; testYear++) {
      //semesterNumber 1 => First semester, semesterNumber 2 => Second semester, semesterNumber 3 => Summer
      for (let semesterNumber = 1; semesterNumber <= 3; semesterNumber++) {
        const semesterCode = `${testYear}${semesterNumber}0`;
        const calendar = await this.getCalender(semesterCode);

        if (calendar) {
          const calendarHelper = new CalenderHelper(calendar);
          const lastEventDate = calendarHelper.getLastDayDateInCalender();

          // Check if the [lastEventDate] is in the past, if [true] then the this semester is in the past
          if (lastEventDate < dateNow) {
            continue; // Skip this semester because it is in the past
          }

          console.log(`Current semester: ${semesterCode}`);

          return calendar;
        }
      }
    }

    throw new Error(`Couldn't find the current semester`);
  }
}
