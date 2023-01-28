const Post=require('../modals/post');
const User = require('../modals/user');



exports.createPost=(req,res)=>
{
       try
       {
         
            let post={createdBy:req.userId,...req.body}
            console.log(post)
            const finalPost=new Post(post);
            finalPost.save().then((result)=>
            {
                  console.log(result)
                  res.status(200).json({status:true})
            })
            .catch((err)=>
            {
                  res.status(200).json({status:false})
            })
       }
       catch(err)
       {
           res.status(200).json({status:false})
       }
}



exports.deletePost= async (req,res)=>
{
       try
       {
           const postId=req.params.postId
           const result=await Post.findByIdAndDelete({_id:postId})
           if(!result)
           {
               res.status(200).json({status:true})
           }
           res.status(200).json({status:true})
       }
       catch(err)
       {
           res.status(200).json({status:false})
       }
}

exports.showedIntrest=async (req,res)=>
{
      try
      {
          const postId=req.params.postId
          

          const post=await Post.findById({_id:postId})
          
          if(!post)
          {
              return  res.json({message:'something went wrong',status:false})
          }
          const userDetail={userId:req.userId,description:req.body.description}
       
      let result=await  Post.findByIdAndUpdate({_id:postId},{
            $push:{
                intrestedOnes:userDetail
            }
        })
        
      if(!result)
      {
           return res.status(200).json({status:false})
      }
     
      result =await User.findByIdAndUpdate({_id:req.userId},{
        $push:{
            showedIntrestIn:{
                postId:postId
            }
        }
      })

      console.log(result)

      if(!result)
      {
           return res.status(200).json({status:false})
      }

      res.status(200).json({status:true})
      
      }
      catch(err)
      {
      
           res.status(200).json({status:false})
      }
}


exports.reachedOut=async(req,res)=>
{
       try
       {
           const intrestedUserId=req.body.intrestedUserId
           const postId=req.body.postId
           let post=await Post.updateOne({
            _id: postId,
            intrestedOnes: {
                $elemMatch: {
                    userId: intrestedUserId
                }
            }
        },
        {
            $set:{
                'intrestedOnes.$.reachedOut':1,
            }
        }, 
        {
            new: true,
            useFinedAndModify: false,
        })
        if(!post)
        {
              return res.status(200).json({status:false})
        }
           res.status(200).json({status:true})
       }
       catch(err)
       {
        res.status(200).json({status:false})
       }
}