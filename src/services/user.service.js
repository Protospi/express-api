const User = require('../models/user.model');

class UserService {
  async getAllUsers() {
    return await User.find({});
  }

  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(id) {
    return await User.findById(id);
  }
}

module.exports = new UserService(); 