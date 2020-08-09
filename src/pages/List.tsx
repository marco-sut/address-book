import React, { useEffect, useContext } from 'react';
import UserCard from '../components/UserCard';
import styles from '../styles/modules/list.module.scss';
import { StateContext, Action, ActionTypes } from '../lib/context/State';
import { State } from '../model/State';
import UserApi from '../lib/api/UserApi';
import Loader from '../lib/ui/Loader';
import ErrorBoundary from '../lib/ErrorBoundary';
import ErrorMessage from '../lib/ui/ErrorMessage';

const List = () => {
  const [data, func] = useContext(StateContext);
  const { loading, error, users } = data as State;
  const dispatch = func as (action: Action) => {};

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: ActionTypes.LoadingUsers,
        data: { users: [] }
      });
      try {
        const users = await UserApi.loadUser();

        dispatch({
          type: ActionTypes.LoadedUsers,
          data: { users }
        });
      } catch (err) {
        dispatch({
          type: ActionTypes.LoadError,
          data: { users: [] }
        });
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      {loading
        ? <Loader />
        : error
          ? <ErrorMessage text='An Error occurred while calling the API' />
          : (
            <article className={styles.list}>
              {
                users.map((user) => {
                  return <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
                })
              }
            </article>
          )}
    </>
  );
};

export default function ListErrorBoundary() {
  return (
    // Higher order component to track rendering Errors
    <ErrorBoundary>
      <List />
    </ErrorBoundary>
  );
}