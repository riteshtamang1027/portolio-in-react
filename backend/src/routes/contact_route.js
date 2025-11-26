import express from "express";
import { createContact } from "../controllers/contact_controller.js";

const router = express.Router();

router.post("/", createContact);

export default router;
