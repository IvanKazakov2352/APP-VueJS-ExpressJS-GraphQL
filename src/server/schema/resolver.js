const users = [];

module.exports = {
  getUsers() {
    return users;
  },
  createUser({ user }) {
    users.push({
      id: user.id,
      name: user.name,
      age: user.age,
      email: user.email,
    });
    return user;
  },
  deleteUser(user) {
    const idx = users.findIndex(u => u.id === user.id)
    const result = users.splice(idx, 1)
    return result
  }
};
