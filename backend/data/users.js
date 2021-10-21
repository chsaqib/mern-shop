import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Saqib Nazir',
    email: 'nazir@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'mr matrix',
    email: 'matrix@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
