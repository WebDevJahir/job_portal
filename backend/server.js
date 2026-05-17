import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
const PORT = 5000
const app = express();

//DB
connectDB();


//MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads')) //to serve static files like resumes and profile pictures

//ROUTES
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("API WORKING")
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})