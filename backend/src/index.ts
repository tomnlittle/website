import * as https from 'https';

import { app } from './api';
import { CERT, KEY, PORT } from './config/app';

https.createServer({
  key: KEY,
  cert: CERT
}, app).listen(PORT);
