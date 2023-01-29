const router=require('express').Router()
const userController=require('../controllers/userController.js')
const jwtverify=require('../controllers/jwtverify.js')


router.post('/update-profile',jwtverify,userController.updateProfile)
router.post('/update-profile',jwtverify,userController.updateProfile)

module.exports=router