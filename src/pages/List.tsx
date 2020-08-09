import React, { useEffect, useContext } from 'react';
import UserCard from '../components/UserCard';
import styles from '../styles/modules/list.module.scss';
import { StateContext, Action, ActionTypes } from '../lib/context/State';
import { State } from '../model/State';
import UserApi from '../lib/api/UserApi';
import Loader from '../lib/ui/Loader';

const List = () => {
  const [data, func] = useContext(StateContext);
  const { loading, users } = data as State;
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
    <>
      {loading ? <Loader /> : (
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

export default List;