import * as express from 'express';

import * as https from 'https';

import { CERT, KEY, PORT } from './config/app';
import { router } from './router';

const app = express().use(router);

https.createServer({
  key: KEY,
  cert: CERT
}, app).listen(PORT);
