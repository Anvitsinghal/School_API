const express=require('express');
const { addschool, listschool, getAllSchools } = require('../controllers/schoolController');
const router=express.Router();

router.post('/addSchool',addschool);
router.get('/listschool',listschool);
router.get('/getAllSchools', getAllSchools);

module.exports=router;