import mongoose, { Schema } from "mongoose";

export const video = mongoose.model(
    'video',
    new Schema({
        _id: { type: Schema.Types.ObjectId, auto: true },
        title: { type: String, required: true },
        videoUrl: { type: String, required: true },
        bannerUrl: { type: String, required: true },
        description: { type: String },
    })
)