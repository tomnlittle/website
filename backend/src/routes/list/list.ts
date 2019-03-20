import { Router } from 'express';
import * as moment from 'moment';

import { listFolder } from '../../dropbox';

const router = Router();

router.get('/list', async (_, res) => {

  const rootFolder = await listFolder({
    folder: '/journals',
    recursive: false
  });

  const folders = rootFolder.entries.filter((current) => current['.tag'] === 'folder');

  const reduced = folders.map((current) => ({
    path: current.path_lower,
    year: moment(current.name, 'DD-MM-YY').year()
  }));

  res.json(reduced);
});

export const listRouter = router;
