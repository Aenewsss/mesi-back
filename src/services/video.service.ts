import { IVideo } from "../dtos/video.dto"
import { video } from "../model/video.model"

export const videoService = {
    async listVideos(): Promise<IVideo[]> {
        return await video.find()
    },

    async insertVideo(dto: IVideo): Promise<IVideo> {
        const newVideo = new video(dto)
        return await newVideo.save()
    },
}