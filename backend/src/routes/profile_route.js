import express from "express";
import { create_profile,  getUser, updateuserinfo } from "../controllers/profile_controller.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = express.Router(); 

router.post("/", upload.single("profile_picture"), create_profile);
router.get("/",getUser)
// router.get("/:id",something)
router.patch("/:id",upload.single("profile_picture"),updateuserinfo)

export default router;
