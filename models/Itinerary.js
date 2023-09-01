import { model,Schema,Types } from 'mongoose'

let collection = 'itineraries'

let schema = new Schema({
    name: { type:String,required:true },
    city_id: { type:Types.ObjectId,required:true,ref:'cities' },
    price: { type:Number,required:true },
    duration: { type:Number,required:true },
    tags: [{ type:String,requered:true }],
    photo: { type:String,required:true },
    comments: [{ type:String,requered:false }]
},{
    timestamps: true
})

let Itinerary = model(collection,schema)
export default Itinerary