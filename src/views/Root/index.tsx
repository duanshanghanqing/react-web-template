import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header/index';

export default ({ route, match }) => {
  console.log(match);
  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};

