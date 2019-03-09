import * as rp from 'request-promise';

import {
  DROPBOX_ACCESS_TOKEN,
} from '../config';

interface IMethodArguments {
  readonly endpoint: string;
  readonly method: 'POST' | 'GET';
  readonly body?: any;
}

export async function dropboxClient({
  endpoint,
  method,
  body
}: IMethodArguments): Promise<any> {
  return rp(`https://api.dropboxapi.com/2/${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${DROPBOX_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body,
    json: true,
  });
}
