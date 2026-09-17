import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export default async (req, res, next) => {
    // check for bearer auth header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res
            .status(401)
            .json({ message: 'Invalid authorization header' });
    }

    // verify bearer jwt token
    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        //attach user to request object
        req.user = user._doc;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
