import 'dotenv/config';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import swaggerSpec from './config/swagger.js';

const app = express();
const port = 8000;
const clientUrl = 'http://localhost:3000';

// middleware
app.use(
    cors({
        origin: clientUrl,
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
