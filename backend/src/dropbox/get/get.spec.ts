import * as fs from 'fs';

import { getFile } from './get';

describe('Dropbox - Get', () => {

  it('Should Fail - Invalid File', async () => {
    expect.assertions(3);

    try {

      const stream = fs.createWriteStream('/dev/null');

      const response = getFile({
        id: '/journals/',
        writeStream: stream,
      });
      console.log({ response });
    } catch (error) {
      console.error({ error });
      expect(error.name).toMatch('StatusCodeError');
      expect(error.statusCode).toEqual(409);
      expect(error.message).toContain('malformed_path');
    }
  });

  it('Should Pass - Valid File', async () => {

    try {
      const stream = fs.createWriteStream('/dev/null');

      getFile({
        id: '/journals/01-22-17/index.md',
        writeStream: stream,
      });
    } catch (error) {
      console.error({ error });
    }
  });
});
