const express = require("express");
const router = express.Router();
const FAQController=require('../controller/FAQController');


router.get("/", FAQController.getAllFAQ);
router.post("/", FAQController.createFAQ);


module.exports = router;