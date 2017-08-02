import { Document } from "@root/documents";
import {
  ApiOptions,
  Api,
  ExperimentCookie,
  PreviewCookie,
  Form,
  SearchForm
} from "./api";

import { DefaultRequestHandler } from '@root/request';
import * as AllPredicates from '@root/predicates';
import { Experiments } from '@root/experiments';

function getApi(url: string, options: ApiOptions | null): Promise<Api> {
  const safeOptions = options || {} as ApiOptions;
  var api = new Api(url, safeOptions);
  //Use cached api data if available
  return new Promise(function(resolve, reject) {
    var cb = function(err: Error | null, api?: any) {
      if (safeOptions.complete) safeOptions.complete(err, api);
      if (err) {
        reject(err);
      } else {
        resolve(api);
      }
    };
    api.get(function (err: Error, data: any) {
      if (!err && data) {
        api.data = data;
        api.bookmarks = data.bookmarks;
        api.experiments = new Experiments(data.experiments);
      }

      cb(err, api);
    });

    return api;
  });
}

module.exports = {
  experimentCookie: ExperimentCookie,
  previewCookie: PreviewCookie,
  Document,
  SearchForm,
  Experiments,
  Predicates: AllPredicates.Predicates,
  api: getApi,
  getApi
};
