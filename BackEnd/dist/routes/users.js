"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
//----------------------------CRUD ROUTES / USERS ------------------------------------------------
router.get("/", user_1.getUsers);
router.post("/", [
    (0, express_validator_1.check)('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    (0, express_validator_1.check)("name", "El nombre debe ser minimo de 5 caracteres").isLength({ min: 5 }),
    (0, express_validator_1.check)("name").not().equals("doublevpartners"),
], user_1.addUser);
router.delete("/:userId", user_1.deleteUser);
exports.default = router;
