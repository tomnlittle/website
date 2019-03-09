import { IJournal, IJournalConfig, IJournalResponse } from '@tomnlittle/types';
import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => {

  const response: IJournalResponse = {};

  res.json(response);
});
