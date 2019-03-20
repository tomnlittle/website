import * as dotenv from 'dotenv';
dotenv.config();

interface IDropboxEnv {
  DROPBOX_ACCESS_TOKEN: string;
}

export const {
  DROPBOX_ACCESS_TOKEN
}: IDropboxEnv = <any> process.env;
