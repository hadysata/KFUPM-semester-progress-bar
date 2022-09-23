export class TweetHelper {
  protected static newLine(text: string): string {
    return text + '\n\n';
  }

  public static generateTweet(
    progressBar: string,
    currentDay: number | string,
    totalSemesterDays: number | string,
    nearestEvent: string | undefined,
  ): string {
    let tweet = this.newLine(progressBar);
    tweet += this.newLine(`${currentDay}/${totalSemesterDays} days passed ✅`);
    tweet += this.newLine(`${+totalSemesterDays - +currentDay} days left 🗓`);
    if (nearestEvent) {
      tweet += this.newLine(`${nearestEvent.replaceAll('   ', '')} 💡`);
    }

    tweet += this.newLine(`\n#KFUPM`);

    if (tweet.length > 280) {
      throw new Error('Tweet length must be less than or equal to 280 characters');
    }

    return tweet;
  }
}
