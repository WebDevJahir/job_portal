import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
const PORT = 5000
const app = express();

//DB
connectDB();


//MIDDLEWARES
app.use(express.json())
app.use(cors())

//ROUTES

app.get('/', (req, res) => {
    res.send("API WORKING")
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})