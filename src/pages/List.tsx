import React, { useEffect, useContext } from 'react';
import UserCard from '../components/UserCard';
import styles from '../styles/modules/list.module.scss';
import { StateContext, Action, ActionTypes } from '../lib/context/State';
import { State } from '../model/State';
import UserApi from '../lib/api/UserApi';

const List = () => {
  const [data, func] = useContext(StateContext);
  const { loading, error, users } = data as State;
  const dispatch = func as (action: Action) => {};
  
  useEffect(() => {
    const fetchData = async () => {
      const users = await UserApi.loadUser();

      dispatch({
        type: ActionTypes.LoadUsers,
        data: { users }
      });
    }
    
    fetchData();
  }, [dispatch]);

  return (
    <article className={styles.list}>
      {loading}
      {error}
      {users.map((user) => {
        return <UserCard key={user.id} id={user.id} name={user.name} email={user.email} />
      })}
    </article>
  );
};

export default List;