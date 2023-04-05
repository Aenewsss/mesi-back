import express from "express";
import { videoService } from "../services/video.service";
import httpStatusCode from "http-status-codes"

export const videoController = {
    async getVideoById(req: express.Request, res: express.Response) {
        try {
            res.json({ videos: [1, 2, 3, 4] })
        } catch (error) {
            res.status(400).json({ message: `Error: ${error}` })
        }
    },

    async listVideos(req: express.Request, res: express.Response) {
        try {
            const videos = await videoService.listVideos();

            res.json({ videos })
        } catch (error) {
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error}` })
        }
    },

    async insertVideo(req: express.Request, res: express.Response) {
        try {

            const { title, videoUrl, bannerUrl, description } = req.body

            const dto = { title, videoUrl, bannerUrl, description }

            const newVideo = await videoService.insertVideo(dto);

            res.json({ message: `Video inserted`, newVideo })
        } catch (error) {
            res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({ message: `Error: ${error}` })
        }
    },

    async deleteVideo(req: express.Request, res: express.Response) {
        try {
            res.json({ videos: [1, 2, 3, 4] })
        } catch (error) {
            res.status(400).json({ message: `Error: ${error}` })
        }
    },

    async updateVideoById(req: express.Request, res: express.Response) {
        try {
            res.json({ videos: [1, 2, 3, 4] })
        } catch (error) {
            res.status(400).json({ message: `Error: ${error}` })
        }
    },
}