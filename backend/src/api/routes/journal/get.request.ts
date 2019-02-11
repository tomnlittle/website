import { Router } from 'express';
import { readdirSync, readFileSync } from 'fs';
import * as path from 'path';

export const router = Router();

router.get('/', (req, res) => {

  const basePath = path.join(__dirname, '../../../../journals');
  const files = readdirSync(basePath);

  const data = files.map((folder) => {
    const fullPath = path.join(basePath, folder);

    const filePath = path.join(fullPath, 'index.md');
    const tagsPath = path.join(fullPath, '.tags');

    const file = readFileSync(filePath).toString();
    const tags = readFileSync(tagsPath).toString();

    return {
      date: new Date(folder),
      file,
      tags
    };
  });

  res.json(data);
});
