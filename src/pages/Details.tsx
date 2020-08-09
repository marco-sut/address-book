import React from 'react';
import UserDetail from '../components/UserDetail';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../lib/ErrorBoundary';

const Details = () => {
  let { id } = useParams();
  return <UserDetail id={id} />;
};

export default function DetailsErrorBoundary(props: any) {
  return (
    // Higher order component to track rendering Errors
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}