import { CalenderHelper } from './utils/calender_helper';
import { ProgressBarHelper } from './utils/progress_bar_helper';
import { TwitterHelper } from './utils/twitter_helper';
import { TweetHelper } from './utils/tweet_helper';
import { SetupHelper } from './utils/setup_helper';

export async function runner() {
  try {
    console.log('Starting runner 💡\n');

    SetupHelper.setupAll();

    const calender = await CalenderHelper.getCurrentSemesterCalender();
    const calendarHelper = new CalenderHelper(calender);

    const progressBar = await ProgressBarHelper.createSemesterProgressBar(calendarHelper);

    const tweet = TweetHelper.generateTweet(
      progressBar.get(),
      calendarHelper.getCurrentDayInSemester(),
      calendarHelper.getTotalDaysInSemester(),
      calendarHelper.getTodaysEvent(),
    );

    console.log(`Tweet:\n\n ${tweet}`);

    console.log(`\n=============================\n\n`);

    const twitter = TwitterHelper.twitterHelper;

    const lastTweet = await twitter.getLastTweet();

    if (lastTweet == tweet) {
      throw new Error(`Couldn't tweet because the last tweet is qual to the new tweet`);
    }

    await twitter.newTweet(tweet);

    console.log(`Runner finished successfully ✅`);
  } catch (error) {
    console.error(`❌ Runner failed duo to:\n ${error}`);
  }
}
