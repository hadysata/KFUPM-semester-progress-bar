import axios from 'axios';
import { ApiConstants } from '../constants/api_constants';
import { Query } from '../types/query';

export class ApiHelper {
  /**
   * It takes an endpoint and a query object, and returns a promise of the data from the API
   * @param {string} endpoint - The endpoint you want to hit.
   * @param {Query} query - Query
   * @returns The data from the API call.
   */
  public static async get<T>(endpoint: string, query: Query): Promise<T | undefined> {
    try {
      const config = {
        method: 'get',
        url: `${ApiConstants.BASE_URL}${endpoint}?${query.key}=${query.value}`,
        headers: ApiConstants.HEADERS,
      };

      const result = await axios(config);

      return result.data as T;
    } catch (error) {
      // console.error(error);
      return undefined;
    }
  }
}
