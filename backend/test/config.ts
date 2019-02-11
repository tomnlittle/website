import { readFileSync } from 'fs';

interface ITestEnvironment {
  TARGET_HOST: string;
  CA_CERT_PATH: string;
}

export const {
  CA_CERT_PATH,
  TARGET_HOST = 'localhost'
}: ITestEnvironment = <any> process.env;

export const CA_CERT = readFileSync(CA_CERT_PATH);
