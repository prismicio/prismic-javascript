// import { getApi, IApiOptions, ApiResponse } from './api';

// export class Client {
//   url: string;
//   options?: IApiOptions;

//   constructor(url: string, options?: IApiOptions) {
//     this.url = url;
//     this.options = options;
//   }

//   query(q: string | string[], optionsOrCallback: object | ((err?: Error, response?: any) => void), cb: (err: Error | null, response?: any) => void): Promise<ApiResponse> {
//     return getApi(this.url, this.options).then(api => (
//       api.query(q, optionsOrCallback, cb)
//     ));
//   }
// }
