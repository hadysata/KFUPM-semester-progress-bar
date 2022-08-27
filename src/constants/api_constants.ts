/* A class that contains constants that are used in the API */
export class ApiConstants {
  protected static HOST = 'registrar.kfupm.edu.sa';

  static BASE_URL = `https://${this.HOST}/api`;

  static HEADERS = {
    Host: this.HOST,
    Connection: 'keep-alive',
    'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
    Accept: 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    Referer: `https://${this.HOST}/`,
    'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8',
  };
}

/* The Endpoints class is a static class that contains all the endpoints for the API */
export class Endpoints {
  static CALENDER = '/academic-calendar';
}
