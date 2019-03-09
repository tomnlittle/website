import { dropboxClient } from '../client';

interface IMethodArguments {
  readonly id: string;
}

export async function getFile({
  id,
}: IMethodArguments): Promise<any> {
  return dropboxClient({
    endpoint: 'file_requests/get',
    method: 'POST',
    body: {
      id
    },
  });
}
