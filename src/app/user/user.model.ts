// src/app/models/user.model.ts
export interface User {
  _id: string;
  name: string;
  email: string;
  token?: string; // Optional token property for storing JWT token
}
