const { Router } = require("express");
const router = Router();
const authCtrl = require("../controllers/auth.controller");
const verifySignup = require("../middlewares/verifySignup");

router.post("/signup", verifySignup.checkDuplicateEmail, authCtrl.signUp);

router.post("/signin", authCtrl.signIn);

router.post("/find-user" ,authCtrl.findUser);

router.get("/users" ,authCtrl.allUsers);

router.delete("/users/:id" ,authCtrl.deleteUser);

module.exports = router;
