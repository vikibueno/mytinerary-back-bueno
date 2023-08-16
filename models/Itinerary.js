import { model,Schema,Types } from 'mongoose'

let collection = 'iteneraries'

let schema = new Schema({
    name: { type:String,required:true },
    city_id: { type:Types.ObjectId,required:true,ref:'cities' },
    price: { type:Number,required:true },
    duration: { type:Number,required:true },
    tags: { type:[String] },
    photo: { type:String }
})

let Itinerary = model(collection,schema)
export default Itinerary