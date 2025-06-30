export interface User {
  id?: string;
  username: string;
  password: string;
  department: string;
  createdAt?: string;
  updatedAt?: string;
  active: boolean;
}