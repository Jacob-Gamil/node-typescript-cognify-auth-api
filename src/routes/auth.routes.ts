import express from "express";
import { register } from "../controller/auth.controller.js";

const router = express.Router();

router.route("/register").get(register);

export default router;
