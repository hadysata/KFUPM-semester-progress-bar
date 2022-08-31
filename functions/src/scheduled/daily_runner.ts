import * as functions from 'firebase-functions';
import * as BotRunner from '../../../src/runner';

const dailyRunner = functions.pubsub
  .schedule('0,10,30 10,11,15 * * *') // Run every day, At minute 0, 10, and 30 past hour 10, 11, 12, and 15
  .timeZone('Asia/Riyadh')
  .onRun(async (_) => {
    BotRunner.runner();
  });

export { dailyRunner };
