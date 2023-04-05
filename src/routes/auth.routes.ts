import express from "express";
const authRoutes = express.Router();

authRoutes.post('/login', (req: express.Request, res: express.Response) => {
    const { email, password } = req.body

    res.status(200).json({ message: `Authenticated, ${email}` })
})

authRoutes.post('/change-password', (req: express.Request, res: express.Response) => {
    const { email, newPassword } = req.body

    res.status(200).json({ message: `Password changed. New password ${newPassword}` })
})

export default authRoutes