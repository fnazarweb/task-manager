// Here i learned git
// Here i learned linter (ESlint)
// Configured eslint.config.mjs and .prettierrc.json, add scripts to package.json
// Added nodemon - live restarting server and add command to scripts
// Create project structure: config, controllers, middlewares, models, routes

import express from 'express';
import './config/db.js';

// Routes
import authRouter from './routes/authRoutes.js';

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.use('/api', authRouter);

app.listen(3000, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
