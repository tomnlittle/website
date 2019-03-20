import { Router } from 'express';

import { listFolder } from '../../dropbox';

const router = Router();

router.get('/list', async (_, res) => {

  const rootFolder = await listFolder({
    folder: '/journals',
    recursive: true
  });

  const files = rootFolder.entries.filter((current) => current['.tag'] === 'file');

  res.json(files);
});

export const listRouter = router;
