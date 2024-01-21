import { Card } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { AllahsName } from '../data/namesAllah';

const AdminPanel = () => {
  return (
    <div>
      <h2>Админская панель</h2>
      {AllahsName.map((figure, index) => (
        <Card key={index}>
          <Link to={figure.path}>
            <img src={figure.image} alt={figure.name} />
            <h5>{figure.name} </h5>
          </Link>

          <p>{figure.text}</p>
          <p>{figure.status}</p>
        </Card>
      ))}
    </div>
  );
};

export default AdminPanel;
