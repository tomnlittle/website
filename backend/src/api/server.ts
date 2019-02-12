import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import { OK } from 'http-status-codes';
import * as morgan from 'morgan';

import { router as journalRouter } from './routes';

const router = express.Router();

router.use(helmet());
router.use(morgan('dev'));

router.use(cors());

router.use('/journal', journalRouter);

router.all('/', (req, res) => res.status(OK));

export const app = express().use(router);
