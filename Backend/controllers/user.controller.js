import User from "../models/user.model.js";

export const getusersForSidebar = async (req, res)=>{
    try{
        const loggedInUserId = req.user._id;
        // remove "{_id: {$ne: loggedInUserId}}" to send message to ourselves
        const filterUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json({users:filterUsers});
    }catch(error){
        console.log("Error in getusersForSidebar: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}