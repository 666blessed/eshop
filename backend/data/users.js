import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    isAdmin: true,
  },
  {
    name: 'Bobby Shmurda',
    email: 'bobby@example.com',
    password: bcrypt.hashSync('123456', 5),
  },
  {
    name: 'John Cena',
    email: 'cena@example.com',
    password: bcrypt.hashSync('123456', 5),
  },
];

export default users;
