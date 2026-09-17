import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    checked: {
        type: Boolean,
        default: false,
    },

    creationDate: {
        type: String,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
