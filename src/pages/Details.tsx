import React from 'react';
import UserDetail from '../components/UserDetail';
import { useParams } from 'react-router-dom';

const Details = () => {
  let { id } = useParams();
  return <UserDetail id={id} />;
};

export default Details;