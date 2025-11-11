import { findUserName, createUser } from '../userService';

describe('User Service', () => {
  test('deve retornar o nome do usuário existente', () => {
    const name = findUserName(1);
    expect(name).toBe('Alice');
  });

  test('deve criar um novo usuário', () => {
    const result = createUser(3, 'Carlos');
    expect(result).toBe('User created');
  });

  test('deve lançar erro para nome vazio', () => {
    expect(() => createUser(4, '')).toThrow('Name required');
  });
});
