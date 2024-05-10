"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scrape_1 = __importDefault(require("./scrape"));
const router = (0, express_1.Router)();
exports.default = () => {
    (0, scrape_1.default)(router);
    return router;
};
