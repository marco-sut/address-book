import React from 'react';
import styles from '../styles/modules/user-detail.module.scss';

const UserDetail = () => {
  return (
    <article className={styles['user-detail']}>
      <div className={styles['user-detail__col']}>
        <div>
          <img height="120px" src="/assets/person.svg" alt="Clementine Bauch" />
        </div>
      </div>
      <div className={styles['user-detail__col']}>
        <table>
          <tr>
            <th>FULL NAME</th>
            <td>Clementine Bauch</td>
          </tr>
          <tr>
            <th>USERNAME</th>
            <td>Samantha</td>
          </tr>
          <tr>
            <th>EMAIL</th>
            <td>Nathan@yesenia.net</td>
          </tr>
          <tr>
            <th>PHONE</th>
            <td>1-463-123-4447</td>
          </tr>
          <tr>
            <th>ADDRESS</th>
            <td>
              <ul>
                <li>Street: Douglas Extension</li>
                <li>Suite: Suite 847</li>
                <li>City: McKenziehaven</li>
                <li>Zipcode: 59590-4157</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>WEBSITE</th>
            <td>ramiro.info</td>
          </tr>
          <tr>
            <th>COMPANY</th>
            <td>Romaguera-Jacobson</td>
          </tr>
        </table>
      </div>
    </article>
  );
};

export default UserDetail;