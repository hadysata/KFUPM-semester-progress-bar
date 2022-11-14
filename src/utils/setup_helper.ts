import { DateHelper } from './date_helper';
import * as dotenv from 'dotenv';

export class SetupHelper {
  public static async setupAll() : Promise<void> {
    DateHelper.setup();
    dotenv.config();
  }
}
