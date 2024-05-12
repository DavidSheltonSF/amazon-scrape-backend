"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amazonScrapping_1 = require("../controllers/amazonScrapping");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/scrape', (0, middlewares_1.cacheHanler)(500), amazonScrapping_1.amazonScrappingController);
    //router.get('/scrape', amazonScrappingController)
};
