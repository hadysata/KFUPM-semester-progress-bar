export class TweetHelper {
  protected static newLine(text: string): string {
    return text + '\n\n';
  }

  public static generateTweet(
    progressBar: string,
    currentDay: number | string ,
    totalSemesterDays: number | string ,
    todaysEvent: string | undefined,
  ): string {


    /// ensure that the variables are numbers.
    let currentDayNumber: number = +currentDay;
    let totalSemesterDaysNumber: number = +totalSemesterDays;

    let tweet = this.newLine(progressBar);
    tweet += this.newLine(`${currentDayNumber}/${totalSemesterDaysNumber} days done ✅`);
    tweet += this.newLine(`${totalSemesterDaysNumber -currentDayNumber} days left 🗓`);
    if (todaysEvent) {
      tweet += this.newLine(`Today: ${todaysEvent.replaceAll('   ', '')} 💡`);
    }

    tweet += this.newLine(`\n#KFUPM`);

    if (tweet.length > 280) {
      throw new Error('Tweet length must be less than or equal to 280 characters');
    }

    return tweet;
  }
}
