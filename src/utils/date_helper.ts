import { DateTime, Settings } from 'luxon';

export class DateHelper {
  public static setup(): void {
    Settings.defaultZone = 'Asia/Riyadh';
  }

  /**
   * Get the difference(in days) between two dates
   *
   * @param {DateTime} firstDate - The first date to compare.
   * @param {DateTime} secondDate - The date to compare to.
   * @returns The difference between the two dates in days.
   */
  public static differenceBetweenDates(firstDate: DateTime, secondDate: DateTime): number {
    // Remove hours, minutes, seconds and milliseconds from the dates
    firstDate = DateTime.fromObject({ year: firstDate.year, month: firstDate.month, day: firstDate.day });
    secondDate = DateTime.fromObject({ year: secondDate.year, month: secondDate.month, day: secondDate.day });

    return secondDate.diff(firstDate).as('days');
  }

  public static isSameDay(firstDate: DateTime, secondDate: DateTime): boolean {
    return this.differenceBetweenDates(firstDate, secondDate) == 0;
  }

  public static parseDate(date: string): DateTime {
    return DateTime.fromFormat(date, 'MMM.dd, yyyy');
  }
}
