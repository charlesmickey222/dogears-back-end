import mongoose from "mongoose";

const Schema = mongoose.Schema

const noteSchema = new Schema({
  text:{type:String, required:true},
  pageAt:Number
},{
  timestamps:true,
})

const dogearSchema = new Schema({
    book:{type:Schema.Types.ObjectId, ref:'Book'},
    private:Boolean,
    notes:[noteSchema]
},{
  timestamps: true,
})

const Dogear = mongoose.model('Dogear', dogearSchema)

export { Dogear }