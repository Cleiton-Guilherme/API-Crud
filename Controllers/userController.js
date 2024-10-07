// controllers/userController.js
let users = [];

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email, documents: [] };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};

exports.updateUser = (req, res) => {
  const { name, email } = req.body;
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = name || user.name;
  user.email = email || user.email;

  res.status(200).json(user);
};

exports.deleteUser = (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.status(204).send();
};
