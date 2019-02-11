interface MethodArguments {
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
}: MethodArguments) : Promise<any> {
  return fetch(url, {
    method
  })
}
