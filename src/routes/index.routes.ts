import express from "express";
const routes = express.Router();
import videoRoutes from "./video.routes"
import authRoutes from "./auth.routes";

routes.use("/", authRoutes)

const check = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { jwt } = req.body
    if (!jwt) return res.status(401).json({ message: "Not authorized" })
    next()
}

routes.use("/video", check, videoRoutes)

export default routes