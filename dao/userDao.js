const User = require("../models/userModel");

class UserDao {
  async createUser(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  }

  async getUserById(userId) {
    return User.findById(userId);
  }

  async getUsers() {
    return User.find({ isDeleted: false });
  }

  async updateUser(userId, userData) {
    return User.findByIdAndUpdate(userId, userData, { new: true });
  }

  async deleteUser(userId) {
    return User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
  }
}

module.exports = new UserDao();
