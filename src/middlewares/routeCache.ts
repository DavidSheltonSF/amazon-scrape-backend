import { Request, Response, NextFunction } from "express";
import NodeCache from "node-cache";

const cache = new NodeCache();

export const cacheHanler = (duration: number) => (req: Request, res: Response, next: NextFunction) => {
  
  if (req.method !== "GET") {
    console.log('Cannot cache non-get methods!');
    return next();
  }

  const key: any = req.originalUrl;
  const cachedResponse: any = cache.get(key);

  if(cachedResponse){
    console.log(`Cache hit for ${key}`);
    res.send(cachedResponse);

  } else {
    console.log(`Cache miss for ${key}`);
    
    const originalSend = res.send;

    res.send = (body): any => {
      cache.set(key, body, duration);

      originalSend.call(res, body);
    };
    next();
  }
}
