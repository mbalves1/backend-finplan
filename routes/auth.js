const router = require("express").Router()

const authController = require("../controllers/authController")
const checkToken = require("../middleware/checkToken.js")

router
  .route("/auth/register")
  .post((req, res) => authController.create(req, res))

router
  .route("/auth/user")
  .post((req, res) => authController.createL(req, res))

router
  .route("/user")
  .get(checkToken, (req, res) => authController.getUser(req, res))

router
  .route("/forgot_password")
  .post((req, res) => authController.forgotPass(req, res))

router
  .route("/reset_password")
  .post((req, res) => authController.resetPass(req, res))


  module.exports = router