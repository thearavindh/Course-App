"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const courses_json_1 = __importDefault(require("../../data/courses.json"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json(courses_json_1.default);
});
exports.default = router;
