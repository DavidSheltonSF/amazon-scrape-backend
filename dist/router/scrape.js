"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amazonScrapping_1 = require("../controllers/amazonScrapping");
exports.default = (router) => {
    //router.get('/scrape', cacheHanler(500), amazonScrappingController)
    router.get('/scrape', amazonScrapping_1.amazonScrappingController);
};
