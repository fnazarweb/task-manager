// Here i learned git
// Here i learned linter (ESlint)
// Configured eslint.config.mjs and .prettierrc.json, add scripts to package.json
// Added nodemon - live restarting server and add command to scripts
// Create project structure: config, controllers, middlewares, models, routes

import express from 'express';
import swaggerUI from 'swagger-ui-express';
import './config/db.js';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import swaggerSpec from './config/swagger.js';

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(3000, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});

// Here learn docker
