

// project --  title ,  description , link
const User=require('../modals/user.js')

exports.addProject=async (req,res)=>
{
       try
       {
            const user=await User.findById({_id:req.userId})
            if(!user)
            {
                return  res.json({message:'something went wrong',status:false})
            }

        const result=await  User.findByIdAndUpdate({_id:req.userId},{
              $push:{
                  projects:req.body
              }
          })

        if(!result)
        {
          res.json({message:'something went wrong',status:false})
        }
        res.json({status:true})
         
       }
       catch(err)
       {
           res.json({message:'something went wrong',status:false})
       }
}


exports.deleteProject=async(req,res)=>
{
    
     try
     {
       const projectId=req.params.projectId
       
     const result= await User.findOneAndUpdate(
        { _id: req.userId },
        { $pull: {projects: { _id: projectId } } },
        { safe: true, multi: false }
      );
      if(!result)
      {
          res.status(200).json({status:false})
      }
      res.status(200).json({status:true})
     }
     catch(err)
     {
      res.status(200).json({status:false})
     }
}