const { Signup, Login, Logout, ForgotPassword, ResetPassword } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware"); 
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password", ResetPassword);
router.get("/verify", userVerification); 

module.exports = router;
