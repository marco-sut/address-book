import { User } from "../../model/User";

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const loadUser: () => Promise<User[]> = () => fetch(`${baseUrl}/users`)
  .then(response => response.json())
  .then(data => data as User[]);

export const getUserById: (id: number) => Promise<User> = (id: number) => fetch(`${baseUrl}/users/${id}`)
.then(response => response.json())
.then(data => data as User);


export default { loadUser, getUserById }