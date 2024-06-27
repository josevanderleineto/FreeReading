import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1 className="display-1">Erro 404</h1>
        <p className="lead">Página não encontrada</p>
      </div>
    </div>
  );
}

export default NotFound;
