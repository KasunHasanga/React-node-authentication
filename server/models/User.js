 const mongoose =require('mongoose');
 const bcrypt =require('bcryptjs');

 const UserSchema =new mongoose.Schema({
     username:{
         type:String,
         required:[true,"Please provide a username"]
     },
     email:{
         type:String,
         required:[true,"Please provide a email"],
         unique:true,
         match:[
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 
            'Please provide a Valid email'
         ]
     },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minlength:6,
        select:false,
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
 });

 UserSchema.pre("save",async function(next){
     if(!this.isModified('password')){
         next();
     }
     const salt= await bcrypt.genSalt(10);
     this.password =await bcrypt.hash(this.password,salt)
     next();
 });

 UserSchema.methods.matchPasswords = async function(password){
     return await bcrypt.compare(password,this.password);
 }

 const user =mongoose.model("User",UserSchema); 

 module.exports =user;