import express from "express";
import users from "../libs/users.js";

const userRouter = express.Router();

//object constructor for response
function Response(payload) {
  this.success = true;
  this.payload = payload;
}

//retrieves user array
userRouter.get("/", (req, res) => {
  res.json(new Response(users));
});

// get function for retrieving users by id
userRouter.get("/:id", (req, res) => {
  const bodyId = Number(req.params.id);
  let foundUser =
    users.find((element) => element.id === bodyId) ??
    "User iD does not match our records";

  res.json(new Response(foundUser));
});

userRouter.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(new Response(newUser));
});

userRouter.patch("/:id", (req, res) => {
  const newUser = req.body;
  const bodyId = Number(req.params.id);
  let foundUser = users.find((element) => element.id === bodyId);
  let foundUserIndex = users.indexOf(foundUser);
  if (foundUser) {
    users[foundUserIndex] = req.body;
  }
  res.json(new Response(users[foundUserIndex]));
});

userRouter.delete("/:id", (req, res) => {
  const deleteUserId = Number(req.params.id);
  let deletedUser = [null];
  for (let i = 0; i < users.length; i++) {
    if (deleteUserId === users[i].id) {
      deletedUser = users.splice(i, 1);
    }
  }
  console.log(users);
  res.json(new Response(deletedUser[0]));
});

export default userRouter;
