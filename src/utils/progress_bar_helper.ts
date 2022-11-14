import console from 'console';
import { ProgressBar } from '../classes/progress_bar';
import { CalenderHelper } from './calender_helper';

export class ProgressBarHelper {
  public static async createCurrentSemesterProgressBar(): Promise<ProgressBar> {
    const calender = await CalenderHelper.getCurrentSemesterCalender();
    const calenderHelper = new CalenderHelper(calender);

    const progressBar = this.createSemesterProgressBar(calenderHelper);

    return progressBar;
  }

  public static async createSemesterProgressBar(calenderHelper: CalenderHelper): Promise<ProgressBar> {
    try {
      const currentDayInSemester = calenderHelper.currentDayInSemester ?? 0;
      const totalDaysInSemester = calenderHelper.totalDaysInSemester;

      console.log(
        `Current Day In Semester: ${currentDayInSemester}`,
        `, Total Days In Semester: ${totalDaysInSemester}`,
      );

      const progressBar = new ProgressBar(currentDayInSemester, totalDaysInSemester, 20);

      return progressBar;
    } catch (error) {
      console.error(error);

      /* Returning a default empty progress bar if the semester progress bar fails to load. */
      return new ProgressBar(0, 100, 20);
    }
  }
}
