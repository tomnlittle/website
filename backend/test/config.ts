interface ITestEnvironment {
  TARGET_HOST: string;
}

export const {
  TARGET_HOST = 'localhost'
}: ITestEnvironment = <any> process.env;
