import { DateHelper } from './date_helper';
import * as dotenv from 'dotenv';

export class SetupHelper {
  public static async setupAll() {
    DateHelper.setup();
    dotenv.config();
  }
}
