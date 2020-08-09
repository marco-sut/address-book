import React, { useContext, useEffect } from 'react';
import styles from '../styles/modules/user-detail.module.scss';
import { StateContext, Action, ActionTypes } from '../lib/context/State';
import { State } from '../model/State';
import UserApi from '../lib/api/UserApi';
import Loader from '../lib/ui/Loader';
import ErrorMessage from '../lib/ui/ErrorMessage';

const UserDetail = ({ id }: { id: number }) => {
  const [data, func] = useContext(StateContext);
  const { users, currentUser, loading, error } = data as State;
  const dispatch = func as (action: Action) => {};

  const fetchData = async () => {
    dispatch({
      type: ActionTypes.LoadingUsers,
      data: { users: [] }
    });
    try {
      const currentUser = await UserApi.getUserById(id);

      dispatch({
        type: ActionTypes.LoadedCurrentUserById,
        data: { users: [], currentUser }
      });
    } catch (err) {
      dispatch({
        type: ActionTypes.LoadError,
        data: { users: [] }
      });
    }
  }

  useEffect(() => {
    if (users.length) {
      dispatch({
        type: ActionTypes.LoadedCurrentUser,
        data: { users, selectedId: Number(id) }
      });
    } else {
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <>
      {loading
        ? <Loader />
        : error
          ? <ErrorMessage text='An Error occurred while calling the API' />
          : (
            <article className={styles['user-detail']}>
              <div className={styles['user-detail__col']}>
                <div>
                  <img height="120px" src="/assets/person.svg" alt={currentUser.name} />
                </div>
              </div>
              <div className={styles['user-detail__col']}>
                <table>
                  <tbody>
                    <tr>
                      <th>FULL NAME</th>
                      <td>{currentUser.name}</td>
                    </tr>
                    <tr>
                      <th>USERNAME</th>
                      <td>{currentUser.username}</td>
                    </tr>
                    <tr>
                      <th>EMAIL</th>
                      <td>{currentUser.email}</td>
                    </tr>
                    <tr>
                      <th>PHONE</th>
                      <td>{currentUser.phone}</td>
                    </tr>
                    <tr>
                      <th>ADDRESS</th>
                      <td>
                        <ul>
                          <li><strong>Street:</strong> {currentUser.address.street}</li>
                          <li><strong>Suite:</strong> {currentUser.address.suite}</li>
                          <li><strong>City:</strong> {currentUser.address.city}</li>
                          <li><strong>Zipcode:</strong> {currentUser.address.zipcode}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>WEBSITE</th>
                      <td>{currentUser.website}</td>
                    </tr>
                    <tr>
                      <th>COMPANY</th>
                      <td>{currentUser.company.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          )}
    </>
  );
};

export default UserDetail;