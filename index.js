import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import destinationRoute from './routes/destination.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 1234;

// Database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB database connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/destination', destinationRoute);

app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
