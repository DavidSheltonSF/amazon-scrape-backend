"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.amazonScrappingController = void 0;
const scrapeHandling_1 = __importDefault(require("../scrapeHandling"));
const amazonScrappingController = async (req, res) => {
    try {
        const { key } = req.query;
        console.log(key);
        const response = await (0, scrapeHandling_1.default)(String(key));
        if (!response) {
            console.log('No response from amazon');
            return res.sendStatus(500);
        }
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
exports.amazonScrappingController = amazonScrappingController;
