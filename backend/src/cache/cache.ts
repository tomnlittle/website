import { NextFunction, Request, Response } from 'express';

export abstract class Cache {

  public abstract get(key: string): any;
  public abstract put(key: string, value: any): void;

  public requestGet = (req: Request, res: Response, next: NextFunction) => {

    const object = this.get(req.originalUrl);

    if (object) {
      return res.json(object);
    }

    next();
  }

  public requestPut = (req: Request, data: any) => {
    this.put(req.originalUrl, data);
  }
}
