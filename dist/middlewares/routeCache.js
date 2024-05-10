"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheHanler = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
const cacheHanler = (duration) => (req, res, next) => {
    if (req.method !== "GET") {
        console.log('Cannot cache non-get methods!');
        return next();
    }
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        console.log(`Cache hit for ${key}`);
        res.send(cachedResponse);
    }
    else {
        console.log(`Cache miss for ${key}`);
        const originalSend = res.send;
        res.send = (body) => {
            cache.set(key, body, duration);
            originalSend.call(res, body);
        };
        next();
    }
};
exports.cacheHanler = cacheHanler;
