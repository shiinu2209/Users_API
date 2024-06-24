const userDao = require("../dao/userDao");
const UserDTO = require("../dtos/userDto");

class UserService {
  async createUser(userData) {
    const user = await userDao.createUser(userData);
    return new UserDTO(user);
  }

  async getUserById(userId) {
    const user = await userDao.getUserById(userId);
    return user ? new UserDTO(user) : null;
  }

  async getUsers() {
    const users = await userDao.getUsers();
    return users.map((user) => new UserDTO(user));
  }

  async updateUser(userId, userData) {
    const user = await userDao.updateUser(userId, userData);
    return user ? new UserDTO(user) : null;
  }

  async deleteUser(userId) {
    const user = await userDao.deleteUser(userId);
    return user ? new UserDTO(user) : null;
  }
}

module.exports = new UserService();
