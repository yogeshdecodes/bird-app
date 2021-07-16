import User from '../models/userModal';

export const getUserById = (req, res, next) => {
  User.findById(req.params.userId).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'No user was found in DB',
      });
    }
    req.profile = user;
    next();
  });
};
