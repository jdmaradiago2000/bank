// Models
const { User } = require('../models/user.models');

const userExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ where: { id, status: 'active' } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found given that id',
      });
    }

    // Add user data to the req object
    req.user = user;

    //console.log(user.accountNumber);

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userExists };
