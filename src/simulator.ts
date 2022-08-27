import { CalenderHelper } from './utils/calender_helper';
import { DateHelper } from './utils/date_helper';
import { ProgressBarHelper } from './utils/progress_bar_helper';
import { TweetHelper } from './utils/tweet_helper';
import { Calendar } from './types/calendar';
import { DateTime } from 'luxon';
import { SetupHelper } from './utils/setup_helper';

export class Simulator {
  calender: Calendar;

  constructor(calender: Calendar) {
    this.calender = calender;
  }

  /**
   * It loops through all days in the semester and generates a tweet for each day
   */
  public async startSimulation() {
    try {
      await SetupHelper.setupAll();

      const defaultCalendarHelper = new CalenderHelper(this.calender);

      const firstDay = defaultCalendarHelper.getFirstDayDateInCalender();

      console.log('Start simulating 💡');

      // Loop through all days in the semester
      for (let dayIndex = 0; dayIndex <= defaultCalendarHelper.getTotalDaysInSemester(); dayIndex++) {
        const currentDayOffset = DateHelper.differenceBetweenDates(DateTime.now(), firstDay) + dayIndex;

        let dateNow = DateTime.now();
        dateNow = dateNow.plus({ days: currentDayOffset });

        console.log(`Current Day Offset: ${currentDayOffset}`);
        console.log(`Current Date: ${dateNow}`);

        const simulatedCalenderHelper = new CalenderHelper(this.calender, currentDayOffset);

        const progressBar = await ProgressBarHelper.createSemesterProgressBar(simulatedCalenderHelper);

        const tweet = TweetHelper.generateTweet(
          progressBar.get(),
          simulatedCalenderHelper.getCurrentDayInSemester(),
          simulatedCalenderHelper.getTotalDaysInSemester(),
          simulatedCalenderHelper.getTodaysEvent(),
        );

        console.log(`Current Day in the semester: ${simulatedCalenderHelper.getCurrentDayInSemester()}`);

        console.log(`Tweet:\n\n ${tweet}`);

        console.log(`\n=============================\n\n`);
      }

      console.log('Finish simulating ✅');
    } catch (error) {
      throw new Error(`Simulation failed due to: \n${error}`);
    }
  }

  public static async start() {
    const calender = await CalenderHelper.getCurrentSemesterCalender();

    const simulator = new Simulator(calender!);

    await simulator.startSimulation();
  }
}

Simulator.start();
