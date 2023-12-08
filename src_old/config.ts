interface IEnv {
  REACT_APP_API_ADDRESS: string;
  REACT_APP_API_PORT: string;
  REACT_APP_API_PROTOCOL: string;
}

export const {
  REACT_APP_API_ADDRESS = "localhost:3000",
  REACT_APP_API_PROTOCOL = "http",
}: IEnv = process.env as any;
