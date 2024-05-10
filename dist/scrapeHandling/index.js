"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = require("jsdom");
const handleData_1 = require("./handleData");
async function amazonScrapping(key) {
    const items = [];
    const response = await axios_1.default.get(`https://www.amazon.com.br/s?k=${key}`, {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'axios 10.2.4',
            'Accept': '*/*'
        }
    })
        .then((res) => {
        console.log(`Status code from amazon request: ${res.status}`);
        const DOM = new jsdom_1.JSDOM(res.data);
        const results = DOM.window.document.querySelectorAll('[data-component-type="s-search-result"]');
        results.forEach((elem) => {
            const imageURL = (0, handleData_1.getImageURL)(elem);
            const title = (0, handleData_1.getTitle)(elem);
            const rating = (0, handleData_1.getRating)(elem);
            items.push({
                imageURL,
                title,
                rating
            });
        });
        return items;
    })
        .catch((err) => {
        console.log(err);
        console.log('DEU UM ERRO NA REQUISIÇÃO pra AMAZON');
        return null;
    });
    return response;
}
exports.default = amazonScrapping;
