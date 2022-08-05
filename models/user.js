const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
var user = new mongoose.Schema(
  {
    nom:{
        type:String,
    },
    prenom:{
        type:String,
    },
    email:{
        type:String,
    },
    telephone:{
        type:String,
    },
    adresse:{
        type:String,
    },
 
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("user", user);
