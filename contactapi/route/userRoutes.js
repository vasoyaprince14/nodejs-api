const { registerUser, loginUser, currentUser, getRegisterUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');
const { route } = require('./contactRoutes');

const router=require('express').Router();


router.get("/",getRegisterUser)
router.post("/register",registerUser)

router.post("/login",loginUser)

router.post("/current", validateToken ,currentUser)



module.exports=router