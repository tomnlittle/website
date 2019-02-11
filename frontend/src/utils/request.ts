interface IMethodArguments {
  url: string;
  method: 'GET' | 'POST';
  qs?: {};
  body?: {};
}

export async function request({
  url,
  method = 'GET',
  qs,
  body
}: IMethodArguments): Promise<Response> {
  return fetch(url, {
    method,
    headers: {
      Accept: 'application/json'
    }
  });
}
