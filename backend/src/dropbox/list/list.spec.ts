import { listFolder } from './list';

describe('Dropbox - List', () => {

  it('Should Fail - Invalid Folder naming', async () => {
    expect.assertions(3);

    try {
      await listFolder({
        folder: '/',
        recursive: false
      });
    } catch (error) {
      expect(error.name).toMatch('StatusCodeError');
      expect(error.statusCode).toEqual(400);
      expect(error.error).toContain('Specify the root folder');
    }
  });
});
