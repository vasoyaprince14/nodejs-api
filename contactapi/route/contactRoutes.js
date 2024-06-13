const express= require("express");
const { getContacts, createContact, getContactById, updateContact, deleteContact } = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

const router=express.Router();

router.use(validateToken);
router.get("/contacts",getContacts)

router.get("/contacts/:id",getContactById)

router.post("/contacts",createContact)

router.put("/contacts/:id",updateContact)

router.delete("/contacts/:id",deleteContact)






module.exports= router;