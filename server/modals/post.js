const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
     createdBy:
     {
       type:String,
       required:true
     },
     description:
     {
         type:String,
         required:true,
     },
     tags:
     {
         type:Array
     },
     intrestedOnes:
     [{
          userId:
          {
              type:String,
              required:true
          },
          description:
          {
               type:String,
               required:true
          },
          reachedOut:
          {
               default:0
          }
      }
     ]
})


module.exports=mongoose.model('posts',postSchema)

