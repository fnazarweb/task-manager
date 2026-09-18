import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export default async (req, res, next) => {
    // check token from cookies
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // verify bearer jwt token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        //attach user to request object
        const { password, ...userData } = user._doc;
        req.user = userData;

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};
