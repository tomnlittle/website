import { Router } from 'express';
import { readFileSync } from 'fs';
import * as path from 'path';
import { Converter } from 'showdown';

export const router = Router();

const converter = new Converter();

router.get('/', (req, res) => {

  const filePath = path.join(__dirname, '../../../../test/journal/11.2.19/index.md');
  const file = readFileSync(filePath).toString();

  res.json({
    file
  });
});
