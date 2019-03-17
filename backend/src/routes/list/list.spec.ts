import * as supertest from 'supertest';

import { IDropboxListResponse } from '../../dropbox/list/IDropboxListResponse';
import { server } from '../../server';

jest.mock('../../dropbox', () => ({
  getFile: jest.requireActual('../../dropbox/get'),
  listFolder: (): IDropboxListResponse => ({
    cursor: '',
    has_more: false,
    entries: <any> [
      { '.tag': 'folder',
        name: 'journals',
        path_lower: '/journals',
        path_display: '/journals',
        id: 'id:1mx41MPd2NAAAAAAAAAASg' },
      { '.tag': 'folder',
        name: '01-22-17',
        path_lower: '/journals/01-22-17',
        path_display: '/journals/01-22-17',
        id: 'id:1mx41MPd2NAAAAAAAAAASw' },
      { '.tag': 'folder',
        name: '02-01-19',
        path_lower: '/journals/02-01-19',
        path_display: '/journals/02-01-19',
        id: 'id:1mx41MPd2NAAAAAAAAAATA' },

      { '.tag': 'file',
        name: 'config.json',
        path_lower: '/journals/01-22-17/config.json',
        path_display: '/journals/01-22-17/config.json',
        id: 'id:1mx41MPd2NAAAAAAAAAAUw',
        client_modified: '2019-02-18T09:47:06Z',
        server_modified: '2019-02-22T04:55:59Z',
        rev: '11052e375f6',
        size: 243,
        content_hash: '1e1d6d0caeae071dd3316eb4a2b3b2f2d87a6ea69a5e3704808e3ee23e7807b7' },
      { '.tag': 'file',
        name: 'index.md',
        path_lower: '/journals/01-22-17/index.md',
        path_display: '/journals/01-22-17/index.md',
        id: 'id:1mx41MPd2NAAAAAAAAAAVA',
        client_modified: '2019-02-16T00:35:30Z',
        server_modified: '2019-02-22T04:55:59Z',
        rev: '11152e375f6',
        size: 992,
        content_hash: '8611883c88ff283007e6852823538354245b8fb4ec72ff20adc38258d680096d' },
      { '.tag': 'file',
        name: 'config.json',
        path_lower: '/journals/02-01-19/config.json',
        path_display: '/journals/02-01-19/config.json',
        id: 'id:1mx41MPd2NAAAAAAAAAAVQ',
        client_modified: '2019-02-18T09:47:13Z',
        server_modified: '2019-02-22T04:55:59Z',
        rev: '11352e375f6',
        size: 304,
        content_hash: '4d5b05a2ca6d69c580ef2bffc9d99d926f097f89e9568229d2c1c6f2bfa9a3f5' },
      { '.tag': 'file',
        name: 'index.md',
        path_lower: '/journals/02-01-19/index.md',
        path_display: '/journals/02-01-19/index.md',
        id: 'id:1mx41MPd2NAAAAAAAAAAVg',
        client_modified: '2019-02-18T10:30:07Z',
        server_modified: '2019-02-22T04:55:59Z',
        rev: '11452e375f6',
        size: 2993,
        content_hash: '7442fc4a91521b90223566bead791c0eff064e8196cdf05983015a342ad3dc9d' },
      ]
  })
}));

describe('List Journals', () => {

  it('Success - return journal file list', async () => {
    const { body } = await supertest(server).get('/api/list');

    expect(body).toBeDefined();
  });

});
