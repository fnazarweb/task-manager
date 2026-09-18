export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).send({ message: 'User is unauthorized' });
        }

        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: `Access denied` });
        }

        next();
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
};
