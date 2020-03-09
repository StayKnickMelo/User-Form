const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator')

const UserForm = require('./UserFormModel');


router.post('/', [
  check('firstName', 'Name is required').not().isEmpty(),
  check('lastName', 'Last Name is required').not().isEmpty(),
  check('email', 'Require Valid Email').isEmail(),
  check('city', 'Enter a City').not().isEmpty(),
  check('occupation', 'Enter Your occupation').not().isEmpty(),
  check('bio', 'Add a bio').not().isEmpty()

], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }

  const {email} = req.body;

  try{

    let user = await UserForm.findOne({email: email});

    if(user){
      return res.status(400).json({msg: 'User Alredy Exists'});
    }

    user = new UserForm(req.body);

    await user.save();

    res.send(user);

    console.log('User Added')


  }catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
    

  }

  
});





module.exports = router