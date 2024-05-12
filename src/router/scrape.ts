import { Router } from "express";
import { amazonScrappingController } from "../controllers/amazonScrapping";
import { cacheHanler } from "../middlewares";


export default (router: Router) => {
  router.get('/scrape', cacheHanler(500), amazonScrappingController)
  //router.get('/scrape', amazonScrappingController)
}