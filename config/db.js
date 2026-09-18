import mongoose from 'mongoose';

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.36mvuua.mongodb.net/?appName=Cluster0`;

mongoose
    .connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.error(e));
