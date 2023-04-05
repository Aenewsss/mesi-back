import express from "express";
import { videoController } from "../controllers/video.controller";
const videoRoutes = express.Router();

videoRoutes.get('/list-videos', videoController.listVideos)
videoRoutes.get('/video/:id', videoController.getVideoById)
videoRoutes.post('/insert-video', videoController.insertVideo)
videoRoutes.delete('/remove-video/:id', videoController.deleteVideo)
videoRoutes.put('/update-video/:id', videoController.updateVideoById)

export default videoRoutes