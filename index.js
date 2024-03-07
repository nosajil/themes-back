import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import UserRouter from './routes/userRouter.js';
import PostRouter from './routes/postRouter.js';
import cors from 'cors' 


const app = express();

app.use(cors())
dotenv.config();
const port = process.env.PORT || 3003;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Welcome to DASH API');
});


app.use('/', UserRouter, PostRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
