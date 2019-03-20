import * as nodeCache from 'node-cache';

import { Cache } from './cache';
import { CACHE_TTL } from './config';

export class NodeCache extends Cache {

  private cache: nodeCache;

  constructor() {
    super();

    this.cache = new nodeCache({
      stdTTL: CACHE_TTL
    });
  }

  public get(key: string) {
    return this.cache.get(key);
  }

  public put(key: string, value: any) {
    this.cache.set(key, value);
  }
}
