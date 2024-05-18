// src/components/RentalMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RentalMenu = () => {
  const navigate = useNavigate();

  const handleCreateRequest = () => {
    navigate('/create-request');
  };

  return (
    <div>
      <h1>レンタルメニュー</h1>
      <button onClick={handleCreateRequest}>募集を作成</button>
    </div>
  );
};

export default RentalMenu;
