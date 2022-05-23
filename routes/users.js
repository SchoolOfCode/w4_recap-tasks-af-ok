import express from "express";
import users from "../libs/users.js";
import {
  Response,
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "../models/users.js";

const userRouter = express.Router();

//retrieves user array
userRouter.get("/", (req, res) => {
  res.json(getUsers());
});

// get function for retrieving users by id
userRouter.get("/:id", (req, res) => {
  const bodyId = Number(req.params.id);
  res.json(getUserByID(bodyId));
});

userRouter.post("/", (req, res) => {
  const newUser = req.body;

  res.json(createUser(newUser));
});

userRouter.put("/:id", (req, res) => {
  const newUser = req.body;
  const bodyId = Number(req.params.id);
  res.json(updateUserByID(bodyId, newUser));
});

userRouter.delete("/:id", (req, res) => {
  const deleteUserId = Number(req.params.id);

  res.json(deleteUserByID(deleteUserId));
});

export default userRouter;
