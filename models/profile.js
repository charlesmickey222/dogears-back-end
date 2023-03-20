import mongoose from 'mongoose'

const Schema = mongoose.Schema


const requestSchema = new Schema({
  from:{type:Schema.Types.ObjectId, ref:'Profile'},
  to:{type:Schema.Types.ObjectId, ref:'Profile'},
})

const socialSchema = new Schema({
  inbox:[requestSchema],
  reqOut:[requestSchema],
  friends:[{type:Schema.Types.ObjectId, ref:'Profile'}],
})



const profileSchema = new Schema({
  name: String,
  pronouns:String,
  photo: String,
  permissionsLevel:{type:Number, min:0, max:5, default:0},
  private:Boolean,
  library:{type:Schema.Types.ObjectId, ref:'Library'},
  social:[socialSchema],
  discussions:[{type:Schema.Types.ObjectId, ref:'Discussion'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
