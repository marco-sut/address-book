import React, { createContext, useReducer, ReactNode } from 'react';
import { State } from '../../model/State';
import { User } from '../../model/User';

export enum ActionTypes {
  LoadUsers = 'loadUsers',
  LoadCurrentUser = 'loadCurrentUser',
  LoadCurrentUserById = 'loadCurrentUserById',
  LoadError = 'loadError'
}

export interface Action {
  type: ActionTypes,
  data: {
    users: User[],
    currentUser?: User,
    selectedId?: number
  }
}

export const emptyCurrentUser = {
  id: 0,
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  },
  company: { name: '' },
  email: '',
  name: '',
  phone: '',
  username: '',
  website: ''
}

export const initialState: State = {
  loading: true,
  error: false,
  users: [],
  currentUser: emptyCurrentUser
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LoadUsers:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.data.users
      };
    case ActionTypes.LoadCurrentUser:
      return {
        ...state,
        currentUser: action.data.users.find((user) => user.id === action.data.selectedId) || emptyCurrentUser
      };
    case ActionTypes.LoadCurrentUserById:
      return {
        ...state,
        currentUser: action.data.currentUser || emptyCurrentUser
      };
    case ActionTypes.LoadError:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
};

export const StateContext = createContext([initialState, (action: Action) => { }]);

export const StateProvider =
  ({ reducer, initialState, children }:
    { reducer: (state: State, action: Action) => State, initialState: State, children: ReactNode }) => (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );
