import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
        type: String , 
        default : "https://4.bp.blogspot.com/-G208iaAOd5k/Ut32--HFZmI/AAAAAAAAAyM/ETVtEXgTwyo/s1600/Deepika+Padukone+Photo+2014+03.jpg"
    },
},
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;