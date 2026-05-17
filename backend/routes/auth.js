import express from 'express'
import { register, verifyEmail, login, forgotPassword, resetPassword } from '../controllers/AuthController.js';


const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/verify-email', verifyEmail);
authRouter.post('/login', login);
authRouter.post('/forgot-password', forgotPassword);
authRouter.post('/reset-password', resetPassword);

export default authRouter;