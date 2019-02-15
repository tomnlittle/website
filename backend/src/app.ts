/* tslint:disable:no-console */
import { PORT } from './config/app';
import { server } from './server';

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
