import * as functions from 'firebase-functions';
import * as BotRunner from '../../../src/runner';

const dailyRunner = functions.pubsub
  .schedule('0 12 * * *') // Run every day, 12:00 PM
  .timeZone('Asia/Riyadh')
  .onRun(async (_) => {
    BotRunner.runner();
  });

export { dailyRunner };
