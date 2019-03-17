import * as request from 'request';

import {
  DROPBOX_ACCESS_TOKEN,
} from '../../config';

interface IMethodArguments {
  id: string;
  writeStream: any;
}

export function getFile({
  id,
  writeStream,
}: IMethodArguments): any {
  return request.post('https://content.dropboxapi.com/2/files/download', {
    headers: {
      Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
      'Dropbox-API-Arg': JSON.stringify({ path: id }),
    },
  }).pipe(writeStream);
}
