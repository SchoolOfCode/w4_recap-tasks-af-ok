import users from "../libs/users.js";

//object constructor for response
export function Response(payload) {
  this.success = true;
  this.payload = payload;
}

// GET ALL USERS
export function getUsers() {
  return new Response(users);
}

// GET A USER BY ID
export function getUserByID(id) {
  let foundUser =
    users.find((element) => element.id === id) ??
    "User iD does not match our records";
  return new Response(foundUser);
}

// CREATE A USER
export function createUser(newUser) {
  users.push(newUser);
  return new Response(newUser);
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
  let foundUser = users.find((element) => element.id === id);
  let foundUserIndex = users.indexOf(foundUser);
  if (foundUser) {
    users[foundUserIndex] = updatedUser;
  }
  return new Response(users[foundUserIndex]);
}

// DELETE A USER BY ID
export function deleteUserByID(id) {
  let deletedUser = [null];
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      deletedUser = users.splice(i, 1);
    }
  }
  return new Response(deletedUser[0]);
}
