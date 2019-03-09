import { dropboxClient } from '../client';
import { IDropboxListResponse } from './IDropboxListResponse';

interface IMethodArguments {
  readonly folder: string;
}

export async function listFolder({
  folder,
}: IMethodArguments): Promise<IDropboxListResponse> {
  return dropboxClient({
    endpoint: 'files/list_folder',
    method: 'POST',
    body: {
      path: folder,
      recursive: false,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_mounted_folders: true
    },
  });
}
