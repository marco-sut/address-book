import { User } from "./User";

export interface State {
  loading: boolean;
  error: boolean;
  users: User[];
  currentUser: User;
}