interface User {
  id: number;
  name: string;
}

const mockDB: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Daniel' },
];

export const getUserById = (id: number): User | undefined => {
  return mockDB.find(user => user.id === id);
};

export const addUser = (user: User): void => {
  mockDB.push(user);
};
