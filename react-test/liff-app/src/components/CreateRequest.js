// src/components/CreateRequest.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRequest = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/application-complete');
  };

  return (
    <div>
      <h1>募集作成</h1>
      <form onSubmit={handleSubmit}>
        <label>
          報酬:
          <input type="text" name="reward" />
        </label>
        <label>
          詳細:
          <input type="text" name="details" />
        </label>
        <button type="submit">作成</button>
      </form>
    </div>
  );
};

export default CreateRequest;
