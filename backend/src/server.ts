import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import { OK } from 'http-status-codes';
import * as morgan from 'morgan';

import {
  getRouter,
  listRouter,
} from './routes';

const router = express.Router();

router.use(helmet());
router.use(cors());
router.use(morgan('dev'));

router.use(listRouter);
router.use(getRouter);

export const server = express().use('/api', router);

server.all('/', (req, res) => res.json(OK));
