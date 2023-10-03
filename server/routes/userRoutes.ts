import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/:uuid", userController.getUser);
router.put("/:uuid", userController.updateUser);
router.delete("/:uuid", userController.deleteUser);

export default router;