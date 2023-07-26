"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dataBase_1 = __importDefault(require("./utils/dataBase"));
const users_1 = __importDefault(require("./routes/users"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-control-Allow-Origin", "*");
    res.setHeader("Access-control-Allow-Methods", "GET, POST, DELETE");
    next();
});
app.use((0, cors_1.default)());
//text routes
app.get("/", (req, res, next) => {
    res.send("Todo esta funcionando Ok");
});
//CRUD routes
app.use("/api/user", users_1.default);
//error handle
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message });
});
//sync database
dataBase_1.default
    .sync()
    .then(() => {
    console.log("database connected");
    app.listen(4000, () => {
        console.log("Server running on port 4000");
    });
})
    .catch((err) => {
    console.log(err);
});
