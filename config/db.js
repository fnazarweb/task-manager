import mongoose from 'mongoose';

const URI = `mongodb+srv://fnazzar111_db_user2:TEdPq3HC8UsDTpqh@cluster0.36mvuua.mongodb.net/?appName=Cluster0`;

mongoose
    .connect(URI)
    .then(() => console.log('MongoDB connected'))
    .catch((e) => console.error(e));
