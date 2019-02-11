import { readFileSync } from 'fs';

interface IEnv {
  PORT: number;
  CERT_PATH: string;
  KEY_PATH: string;
}

export const {
  PORT = 3000,
  KEY_PATH,
  CERT_PATH,
}: IEnv = <any> process.env;

export const KEY = readFileSync(KEY_PATH);
export const CERT = readFileSync(CERT_PATH);
