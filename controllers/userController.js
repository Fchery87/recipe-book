let users = [
    // { id: 1, username: 'user1', email: 'user1@example.com' },
    // { id: 2, username: 'user2', email: 'user2@example.com' },
    // { id: 3, username: 'user3', email: 'user3@example.com' }
    { id: 1, username: 'john_doe', email: 'john_doe@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane_smith@example.com' },
    { id: 3, username: 'alexander_123', email: 'alexander123@mail.com' },
    { id: 4, username: 'lisa_jackson', email: 'lisa_jackson@mail.com' },
    { id: 5, username: 'michael007', email: 'michael007@example.com' },
    { id: 6, username: 'sarah_j', email: 'sarah_j@example.com' },
    { id: 7, username: 'chris_parker', email: 'chris_parker@mail.com' },
    { id: 8, username: 'emily_grey', email: 'emily.grey@example.com' },
    { id: 9, username: 'david_smith', email: 'david.smith@example.com' },
    { id: 10, username: 'laura_22', email: 'laura22@example.com' },
    { id: 11, username: 'sam_johnson', email: 'sam.johnson@example.com' },
    { id: 12, username: 'julia_96', email: 'julia96@mail.com' },
    { id: 13, username: 'kevin_brown', email: 'kevin_brown@example.com' },
    { id: 14, username: 'hannah_77', email: 'hannah77@example.com' },
    { id: 15, username: 'peter_smith', email: 'peter_smith@example.com' },
    { id: 16, username: 'natalie89', email: 'natalie89@mail.com' },
    { id: 17, username: 'ryan_23', email: 'ryan.23@example.com' },
    { id: 18, username: 'carol_60', email: 'carol60@example.com' },
    { id: 19, username: 'mark_85', email: 'mark_85@mail.com' },
    { id: 20, username: 'amanda_xyz', email: 'amanda_xyz@example.com' }
  
  ];
  
  // GET all users
  const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  // GET single user by ID
  const getUserById = (req, res) => {
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  // CREATE a new user
  const createUser = (req, res) => {
    const { username, email } = req.body;
    const newUser = { id: users.length + 1, username, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // UPDATE user by ID
  const updateUser = (req, res) => {
    const userId = parseInt(req.params.userId);
    const { username, email } = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], username, email };
      res.json(users[userIndex]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  // DELETE user by ID
  const deleteUser = (req, res) => {
    const userId = parseInt(req.params.userId);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  };
  