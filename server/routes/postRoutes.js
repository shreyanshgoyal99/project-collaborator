const router=require('express').Router()
const postController=require('../controllers/postController')
const jwtverify=require('../controllers/jwtverify.js')

router.post('/create-post',jwtverify,postController.createPost)
router.delete('/delete-post/:postId',jwtverify,postController.deletePost)

router.post('/showed-intrest/:postId',jwtverify,postController.showedIntrest)

router.post('/reached-out',jwtverify,postController.reachedOut)


module.exports=router