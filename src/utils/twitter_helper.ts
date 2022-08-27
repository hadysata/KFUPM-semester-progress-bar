import { TwitterApi } from 'twitter-api-v2';

export class TwitterHelper {
  twitterClient: TwitterApi;

  constructor(twitterClient: TwitterApi) {
    this.twitterClient = twitterClient;
  }

  /**
   * It takes a string as an argument, and then uses the Twitter API to post that string as a tweet
   * @param {string} tweet - string - The tweet you want to post.
   */
  public async newTweet(tweet: string) {
    try {
      await this.twitterClient.v1.tweet(tweet);

      console.log(
        `New Tweet tweeted successfully:\n ==================================== \n ${tweet}\n====================================`,
      );
    } catch (error) {
      console.error(error);
    }
  }

  public async getLastTweet(): Promise<string | undefined> {
    try {
      const botId = (await this.twitterClient.currentUserV2()).data.id;

      const lastTweet = (await this.twitterClient.v2.userTimeline(botId)).data.data[0];

      return lastTweet.text;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * It returns a new instance of the TwitterApi class, which is a wrapper around the Twitter API
   * @returns A new instance of the TwitterApi class.
   */
  public static get twitterClient(): TwitterApi {
    const appKey = process.env.APP_KEY;
    const appSecret = process.env.APP_SECRET;
    const accessToken = process.env.ACCESS_TOKEN;
    const accessSecret = process.env.ACCESS_SECRET;

    if (appKey && appSecret && accessToken && accessSecret) {
      const twitterClient = new TwitterApi({
        appKey: appKey,
        appSecret: appSecret,
        accessToken: accessToken,
        accessSecret: accessSecret,
      });

      return twitterClient;
    } else {
      throw new Error('Could not find Twitter Api keys in the environment');
    }
  }
}
