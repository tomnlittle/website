interface IMethodArguments {
  url: string;
  method: 'GET' | 'POST';
  qs?: {};
  body?: {};
}

function queryObjectToString(data: any) {
  // http://stackoverflow.com/a/34209399/707580
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export async function request({
  url,
  method = 'GET',
  qs,
  body
}: IMethodArguments): Promise<Response> {

  let uri = url;

  if (qs) {
    uri += '?' + queryObjectToString(qs);
  }

  return fetch(uri, {
    method,
    headers: {
      Accept: 'application/json'
    }
  });
}
