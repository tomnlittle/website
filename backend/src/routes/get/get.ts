import { Router } from 'express';

import { NodeCache } from '../../cache';
import { getFile } from '../../dropbox';

const cache = new NodeCache();

const router = Router();

// automatically check the in-memory cache
router.use(cache.requestGet);

router.get('/get', async (req, res) => {

  try {

    // download file
    const response = await getFile({
      id: req.query.path,
    });

    res.json(response);

    cache.requestPut(req, response);

  } catch (error) {
    res.status(400).json();
  }

});

export const getRouter = router;
