/* tslint:disable:no-console */
import { PORT } from './config';
import { server } from './server';

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
