const {
  Signup,
  login,
  getuser,
  logout,
} = require("../controller/AuthController");
const { verifyToken } = require("../middleware/verifyToken");
// const { UserVerification } = require("../middlewares/UserVerification");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", verifyToken, login);
router.get("/getuser", verifyToken, getuser);
router.get("/logout", logout);

module.exports = router;
