import { Router } from 'express';

import { NodeCache } from '../../cache';
import { getFile } from '../../dropbox';

const cache = new NodeCache();

const router = Router();

// automatically check the in-memory cache
router.use(cache.requestGet);

router.get('/get', async (req, res) => {

  try {

    // get md file
    const indexFile = await getFile({
      id: req.query.path + '/index.md',
    });

    // get config
    const config = await getFile({
      id: req.query.path + '/config.json',
    });

    const response = {
      config,
      file: indexFile
    };

    res.json(response);

    cache.requestPut(req, response);

  } catch (error) {
    res.status(400).json();
  }

});

export const getRouter = router;
