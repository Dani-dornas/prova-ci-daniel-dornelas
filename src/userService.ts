import { getUserById, addUser } from './database';

export const findUserName = (id: number): string => {
  const user = getUserById(id);
  if (!user) throw new Error('User not found');
  return user.name;
};

export const createUser = (id: number, name: string): string => {
  if (!name) throw new Error('Name required');
  addUser({ id, name });
  return 'User created';
};
