"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const port = 7000;
const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: "*",
    method: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server is running on  http://localhost:${port}/api/`);
});
app.use('/api', (0, router_1.default)());
