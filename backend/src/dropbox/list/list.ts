import * as rp from 'request-promise';

import {
  DROPBOX_ACCESS_TOKEN,
} from '../../config';

import { IDropboxListResponse } from './IDropboxListResponse';

interface IMethodArguments {
  folder: string;
  recursive: boolean;
}

export async function listFolder({
  folder,
  recursive
}: IMethodArguments): Promise<IDropboxListResponse> {
  return rp('https://api.dropboxapi.com/2/files/list_folder', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
    },
    body: {
      path: folder,
      recursive,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_mounted_folders: true
    },
    json: true
  });
}
