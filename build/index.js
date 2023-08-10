"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const package_json_1 = __importDefault(require("./package.json"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.env = require('dotenv').config().parsed;
server.use((0, cors_1.default)());
server.get('/', (_req, res) => {
    return res.send(`Express Typescript on Vercel ${package_json_1.default.version}`);
});
server.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
// Start the express server. 
server.listen(process.env.PORT, async () => {
    try {
        // connectDB(process.env.MONGODB_URL)
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map