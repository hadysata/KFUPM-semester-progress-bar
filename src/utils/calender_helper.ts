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

  /** Get [startDate] attribute for en [event] */
  protected getParsedStartDate(eventIndex: number): DateTime {
    return DateHelper.parseDate(this.calendar.events!.at(eventIndex)!.start_date!);
  }

  /** Get [endDate] attribute for en [event] */
  protected getParsedEndDate(eventIndex: number): DateTime {
    return DateHelper.parseDate(this.calendar.events!.at(eventIndex)!.end_date!);
  }

  /**
   * It returns the first day of the calendar
   * @returns The first day of the calendar.
   */
  public get firstDayDateInCalender(): DateTime {
    return this.getParsedStartDate(0);
  }

  /**
   * It returns the last day of the calendar
   * @returns The last day of the calendar.
   */
  public get lastDayDateInCalender(): DateTime {
    try {
      /**
       * Skipping the last two events in the calendar because last event always referer to an event for the next semester
       * and the second from last refer to last date to submit grades
       *  We want the last day of final exams */

      const lastDayIndex = this.calendar.events!.length - 3;

      let lastDayDate;

      /**  Trying to get the last day of the semester, but some events don't have an end date, so it tries to
      get the start date of the event instead when there's no end date */
      try {
        lastDayDate = this.getParsedEndDate(lastDayIndex);
      } catch (e) {
        lastDayDate = this.getParsedStartDate(lastDayIndex);
      }

      return lastDayDate;
    } catch (error) {
      throw new Error(
        "(CalenderHelper/getLastDayDateInCalender): Couldn't find calendar events, this might be related to KFUPM calendar API",
      );
    }
  }

  public get totalDaysInSemester(): number {
    const firstDay = this.firstDayDateInCalender;
    const lastDay = this.lastDayDateInCalender;
    const daysInSemester = DateHelper.differenceBetweenDates(firstDay, lastDay);

    return daysInSemester;
  }

  public get weeksInSemester(): number {
    const daysInSemester = this.totalDaysInSemester;

    return Math.round(daysInSemester / 7);
  }

  /**
   * It takes a calendar and returns the current day in the semester
   * @returns The current day in the semester.
   */
  public get currentDayInSemester(): number {
    let dateNow = DateTime.now();

    dateNow = dateNow.plus({ days: this.daysOffset });

    const firstDay = this.firstDayDateInCalender;
    const lastDay = this.lastDayDateInCalender;

    const semesterDays = this.totalDaysInSemester;

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

  public get nearestEvent(): string | undefined {
    const todaysEvent = this.todaysEvent;
    const tomorrowsEvent = this.tomorrowsEvent;
    const yesterdaysEvent = this.yesterdaysEvent;

    if (todaysEvent) {
      return `Today: ${todaysEvent}`;
    } else if (tomorrowsEvent) {
      return `Tomorrow: ${tomorrowsEvent}`;
    } else if (yesterdaysEvent) {
      return `Yesterday: ${yesterdaysEvent}`;
    }

    return undefined;
  }

  public get todaysEvent(): string | undefined {
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

  public get tomorrowsEvent(): string | undefined {
    let tomorrowsDate = DateTime.now();

    tomorrowsDate = tomorrowsDate.plus({ days: this.daysOffset + 1 });

    for (const event of this.calendar.events!) {
      const eventDate = DateHelper.parseDate(event.start_date!);

      const isTomorrow = DateHelper.isSameDay(tomorrowsDate, eventDate);

      if (isTomorrow) {
        return event.event; // Event title
      }
    }

    console.log("Couldn't find an event in the calendar that matches tomorrows day.");
    return undefined;
  }

  public get yesterdaysEvent(): string | undefined {
    let yesterdaysDate = DateTime.now();

    yesterdaysDate = yesterdaysDate.plus({ days: this.daysOffset - 1 });

    for (const event of this.calendar.events!) {
      const eventDate = DateHelper.parseDate(event.start_date!);

      const isYesterday = DateHelper.isSameDay(yesterdaysDate, eventDate);

      if (isYesterday) {
        return event.event; // Event title
      }
    }

    console.log("Couldn't find an event in the calendar that matches yesterday day.");
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
          const lastEventDate = calendarHelper.lastDayDateInCalender;

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
