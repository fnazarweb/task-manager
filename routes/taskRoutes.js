import express from 'express';
import * as taskController from '../controllers/taskController.js';
import checkAuth from '../middlewares/checkAuth.js';
import checkAdmin from '../middlewares/checkAdmin.js';

const router = express.Router();

router.use(checkAuth);

/**
 * @openapi
 * /api/task:
 *   get:
 *     tags:
 *       - Task
 *     summary: Get tasks of the current user
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 *                   createdBy:
 *                     type: string
 *       400:
 *         description: Bad request
 */
router.get('/task', taskController.getTasksByUserId);

/**
 * @openapi
 * /api/task/all:
 *   get:
 *     tags:
 *       - Task
 *     summary: Get all tasks
 *     security:
 *       - basicAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 *                   createdBy:
 *                     type: string
 *       400:
 *         description: Bad request
 *       403:
 *         description: User does not have permission
 */
router.get('/task/all', checkAdmin, taskController.getAllTasks);

/**
 * @openapi
 * /api/task/{id}:
 *   get:
 *     tags:
 *       - Task
 *     summary: Get a task by ID
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdBy:
 *                   type: string
 *       404:
 *         description: Task not found
 *       400:
 *         description: Bad request
 */
router.get('/task/:id', taskController.getTask);

/**
 * @openapi
 * /api/task:
 *   post:
 *     tags:
 *       - Task
 *     summary: Create a task
 *     security:
 *       - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *             properties:
 *               description:
 *                 type: string
 *                 example: Buy a book
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdBy:
 *                   type: string
 *       400:
 *         description: Bad request
 */
router.post('/task', taskController.createTask);

/**
 * @openapi
 * /api/task/{id}:
 *   put:
 *     tags:
 *       - Task
 *     summary: Update a task
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *                 createdBy:
 *                   type: string
 *       404:
 *         description: Task not found
 *       400:
 *         description: Bad request
 */
router.put('/task/:id', taskController.updateTask);

/**
 * @openapi
 * /api/task/{id}:
 *   delete:
 *     tags:
 *       - Task
 *     summary: Delete a task
 *     security:
 *       - basicAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 *       400:
 *         description: Bad request
 */
router.delete('/task/:id', taskController.deleteTask);

export default router;
