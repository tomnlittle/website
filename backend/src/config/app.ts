interface IEnv {
  PORT: string;
}

export const {
  PORT = '3000',
}: IEnv = <any> process.env;
