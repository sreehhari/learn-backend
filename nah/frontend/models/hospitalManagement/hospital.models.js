import mongoose from "mongoose";

const hospitalSchema = new mongoose.model({



},{timestamps:true})

export const Hospital = mongoose.model('Hospital',hospitalSchema)