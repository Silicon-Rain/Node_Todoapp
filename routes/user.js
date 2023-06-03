import express from "express";
import { deleteUser, getAllUsers, register, updateUser, userbyid1, userbyid2, userbyid3 } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new", register);

//below all functions do the same work
router.get("/userid", userbyid1);
router.post("/userid", userbyid2);

router
    .route("/userid/:id")
    .get(userbyid3)
    .put(updateUser)
    .delete(deleteUser);

export default router;