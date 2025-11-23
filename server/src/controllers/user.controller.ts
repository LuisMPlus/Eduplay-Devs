import { Request, Response } from 'express';
import { ApiResponse, User } from '../types';

// Simulación de datos en memoria (sin ORM)
let users: User[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    createdAt: new Date(),
  },
];

let nextId = 3;

export const getUsers = (_req: Request, res: Response): void => {
  const response: ApiResponse<User[]> = {
    success: true,
    data: users,
  };
  res.json(response);
};

export const getUserById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    const response: ApiResponse = {
      success: false,
      error: 'Usuario no encontrado',
    };
    res.status(404).json(response);
    return;
  }

  const response: ApiResponse<User> = {
    success: true,
    data: user,
  };
  res.json(response);
};

export const createUser = (req: Request, res: Response): void => {
  const { name, email } = req.body;

  if (!name || !email) {
    const response: ApiResponse = {
      success: false,
      error: 'Nombre y email son requeridos',
    };
    res.status(400).json(response);
    return;
  }

  const newUser: User = {
    id: nextId++,
    name,
    email,
    createdAt: new Date(),
  };

  users.push(newUser);

  const response: ApiResponse<User> = {
    success: true,
    data: newUser,
    message: 'Usuario creado exitosamente',
  };
  res.status(201).json(response);
};

export const updateUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    const response: ApiResponse = {
      success: false,
      error: 'Usuario no encontrado',
    };
    res.status(404).json(response);
    return;
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
  };

  const response: ApiResponse<User> = {
    success: true,
    data: users[userIndex],
    message: 'Usuario actualizado exitosamente',
  };
  res.json(response);
};

export const deleteUser = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    const response: ApiResponse = {
      success: false,
      error: 'Usuario no encontrado',
    };
    res.status(404).json(response);
    return;
  }

  users.splice(userIndex, 1);

  const response: ApiResponse = {
    success: true,
    message: 'Usuario eliminado exitosamente',
  };
  res.json(response);
};
