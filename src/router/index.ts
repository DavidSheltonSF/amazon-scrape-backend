import { Router } from "express";
import scrape from "./scrape";

const router = Router();

export default (): Router => {
  scrape(router);
  return router;
}
