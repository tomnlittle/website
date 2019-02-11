import { Router } from 'express';
import { readdirSync, readFileSync } from 'fs';
import * as path from 'path';

export const router = Router();

interface IJournalResponse {
  [year: string]: IJournal[];
}

interface IJournal {
  date: Date;
  file: string;
  tags: string[];
}

router.get('/', (req, res) => {

  const basePath = path.join(__dirname, '../../../../journals');
  const files = readdirSync(basePath);

  const response: IJournalResponse = {};

  files.forEach((folder) => {
    const fullPath = path.join(basePath, folder);

    const filePath = path.join(fullPath, 'index.md');
    const tagsPath = path.join(fullPath, '.tags');

    const file = readFileSync(filePath).toString();
    const tags = readFileSync(tagsPath).toString();

    const tagsArray = tags.split('\n');

    const date = new Date(folder);

    const journal: IJournal = {
      date,
      file,
      tags: tagsArray
    };

    const key = date.getFullYear();

    if (!response.hasOwnProperty(key)) {
      response[key] = [];
    }

    response[key].push(journal);
  });

  res.json(response);
});
