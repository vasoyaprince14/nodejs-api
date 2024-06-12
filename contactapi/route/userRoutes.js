const { registerUser, loginUser, currentUser, getRegisterUser } = require('../controllers/userController');
const { route } = require('./contactRoutes');

const router=require('express').Router();


router.get("/",getRegisterUser)
router.post("/register",registerUser)

router.post("/login",loginUser)

router.post("/current",currentUser)



module.exports=router