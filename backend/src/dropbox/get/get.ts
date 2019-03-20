import * as rp from 'request-promise';

import {
  DROPBOX_ACCESS_TOKEN,
} from '../config';

interface IMethodArguments {
  id: string;
  // writeStream: any;
}

export async function getFile({
  id,
}: IMethodArguments): Promise<any> {
  return rp('https://content.dropboxapi.com/2/files/download', {
    headers: {
      Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
      'Dropbox-API-Arg': JSON.stringify({ path: id }),
    },
    json: true
  });
}
