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
  experience: boolean;
  project: boolean;
}

router.get('/', (req, res) => {

  const basePath = path.join(__dirname, '../../../../journals');
  const files = readdirSync(basePath);

  const response: IJournalResponse = {};

  files.forEach((folder) => {
    const fullPath = path.join(basePath, folder);

    const filePath = path.join(fullPath, 'index.md');
    const configPath = path.join(fullPath, 'config.json');

    const file = readFileSync(filePath).toString();
    const { tags, experience, project } = JSON.parse(readFileSync(configPath).toString());

    const date = new Date(folder);

    const journal: IJournal = {
      date,
      file,
      tags,
      experience,
      project
    };

    const key = date.getFullYear();

    if (!response.hasOwnProperty(key)) {
      response[key] = [];
    }

    response[key].push(journal);
  });

  res.json(response);
});
