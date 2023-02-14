import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ratingSchema = new Schema({
  Owner:{type:Schema.Types.ObjectId, ref:'Profile'},
  private:Boolean,
  value:{type:Number, min:0, max:5, default:0},
  text:String,
  private:Boolean,
},{
  timestamps:true
})

const Rating = mongoose.Model('Rating', ratingSchema)

export {Rating}