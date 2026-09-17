import bcrypt from 'bcrypt';
import User from '../models/userModel.js';

export const register = async (req, res) => {
    try {
        const { email, password: pwd, role } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pwd, salt);

        const user = await User.create({
            email,
            password: hash,
            role,
        });

        const { password, ...userData } = user._doc;
        return res.status(201).json(userData);
    } catch (e) {
        console.error('Error', e);
        return res.status(500).json({ message: e.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password: pwd } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isValid = await bcrypt.compare(pwd, user.password);
        if (!isValid) {
            return res.status(400).json({
                message: 'Invalid password or email',
            });
        }

        const { password, ...userData } = user._doc;
        return res.status(200).json(userData);
    } catch (e) {
        console.error('Error', e);
        return res.status(500).json({ message: e.message });
    }
};
