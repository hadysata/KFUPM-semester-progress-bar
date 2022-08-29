import * as functions from 'firebase-functions';
import * as BotRunner from '../../../src/runner';

const dailyRunner = functions.pubsub
  .schedule('0 10 * * *') // Run every day, 10:00 AM
  .timeZone('Asia/Riyadh')
  .onRun(async (_) => {
    BotRunner.runner();
  });

export { dailyRunner };
