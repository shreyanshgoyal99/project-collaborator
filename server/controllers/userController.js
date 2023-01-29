

// project --  title ,  description , link
const User=require('../modals/user.js')

exports.updateProfile=async (req,res)=>
{
       try
       {
          User.findOneAndUpdate({_id:req.userId},req.body).then((result)=>
          {
            console.log(result)
            res.json({status:true})
          }).
          catch((err)=>
          {
                res.status(200).json({status:false})
          })  
         
       }
       catch(err)
       {
           res.json({message:'something went wrong',status:false})
       }
}

exports.addfutureDomain=async (req,res)=>
{
       try
       {
          User.findOneAndUpdate({_id:req.userId},{
             $push:{
                futuredomain:req.futuredomain
             }
          }).then((result)=>
          {
            res.json({status:true})
          }).
          catch((err)=>
          {
                res.status(200).json({status:false})
          })  
         
       }
       catch(err)
       {
           res.json({message:'something went wrong',status:false})
       }
}