import { Router } from 'express';

import { getFile } from '../../dropbox';

const router = Router();

router.get('/get', async (req, res) => {

  try {

    // download file
    await getFile({
      id: req.query.path,
      writeStream: res
    });

  } catch (error) {
    res.status(400).json();
  }

});

export const getRouter = router;
