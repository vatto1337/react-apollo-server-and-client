import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { findUser } from './graphql/queries/User';

export default () => {
  const [ id, setID ] = useState(0);
  const { loading, error, data } = useQuery(findUser(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (<div>
    Welcome to your React app.
    <p>{ JSON.stringify(data) }  </p>
    <button onClick={() => setID(id + 1)}>Change ID to { id + 1 }</button>
  </div>)
}