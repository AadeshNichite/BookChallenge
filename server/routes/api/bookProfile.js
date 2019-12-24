const express = require('express');
const router = express.Router();
const Profile = require('../../models/bookProfile');

//@route    GET api/Books profile
//@desc     Get books list from database
//@access   Private

router.get('/', async (req,res) => {
    try{
        const profile = await Profile.find();

        if(!profile){
            return res.status(400).json({msg:"No profile avilable.."});
        }

        res.json(profile);
    }catch(err){
        console.log(err.message);
        res.status(500).send("server error");
    }

});


//@route    POST api/profile
//@desc     Create and Update Book profile
//@access   Private
router.post(
    '/',
    async (req,res)=>{
        const {
            
            author,
            bookname,
            description,
            rating

        } = req.body;

        //Build book Profile object
        const bookProfileField = {};

        if(author)bookProfileField.author = req.body.author;

        //Build A profile history Object
        bookProfileField.bookinfo={}

        if(bookname) bookProfileField.bookinfo.bookname = req.body.bookname;
        if(description) bookProfileField.bookinfo.description= req.body.description;
        if(rating) bookProfileField.bookinfo.rating= req.body.rating;

         try{

            let profile = await Profile.findOne({ user : req.body.author });

            if(profile){
    
                //update profile
                profile = await Profile.findOneAndUpdate(
                    { author: req.user.author },
                    { $set : bookProfileField },
                    { new: true }
                );

                return res.json(profile);
            }
           
            //Create profile & save
            profile = new Profile(bookProfileField);
            await profile.save();
            return res.json(profile);

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    });


//@route    GET api/profile/profile/:bookname
//@desc     Get  profile by user_id 
//@access   Public
router.get('/profile/:bookname',async (req,res) =>{
    try{
        const profile = await Profile.findOne({ user : req.params.bookname});
        res.json(profile);

        if(!profile)
        return res.status(400).json({msg : 'Profile Not found'});

    }catch(err){
        console.error(err.message); 
        if(err.kind=='ObjectId'){
            return res.status(400).json({msg : 'Profile Not found'});
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;