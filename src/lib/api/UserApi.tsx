import { User } from "../../model/User";

const baseUrl = 'https://jsonplaceholder.typicode.com';

// Adding delay with setTimeout to see the loader, won't be using in a real app
export const loadUser: () => Promise<User[]> = () => fetch(`${baseUrl}/users`)
  .then(response => response.json())
  .then(data => new Promise(resolve => setTimeout(() => resolve(data), 800)));

  // Adding delay with setTimeout to see the loader, won't be using in a real app
export const getUserById: (id: number) => Promise<User> = (id: number) => fetch(`${baseUrl}/users/${id}`)
.then(response => response.json())
.then(data => new Promise(resolve => setTimeout(() => resolve(data), 800)));


export default { loadUser, getUserById }