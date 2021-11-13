import { Router } from "express";
import {
  getAllUserData,
  addMission,
  deleteMission,
  updateMission,
  addCategory,
  deleteCategory,
} from "../controller/todos";

import auth from "../middleware/auth";

const router = Router();

router.get("/:userId", auth, getAllUserData);
router.post("/", auth, addMission);
router.delete("/:id", auth, deleteMission);
router.post("/updateTodo", auth, updateMission);
router.post("/addCategory", auth, addCategory);
router.delete("/category/:id/:category", auth, deleteCategory);

export default router;
