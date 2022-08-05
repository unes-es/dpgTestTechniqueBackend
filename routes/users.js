var express = require('express');
var router = express.Router();


const User = require("../models/user");

/* GET users listing. */
router.get('/', (req, res, next) =>{
  User.find()
  .then((users) => res.json(users))
  .catch((err) => res.status(400).json("Error: " + err));
});


router.post("/", (req, res, next) => {
  console.log(req.body.user)
  const newUser = new User(req.body.user);
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
