const router=require('express').Router()
const userController=require('../controllers/userController.js')
const jwtverify=require('../controllers/jwtverify.js')


router.post('/add-project',jwtverify,userController.addProject)

router.delete('/delete-project/:projectId',jwtverify,userController.deleteProject)

module.exports=router