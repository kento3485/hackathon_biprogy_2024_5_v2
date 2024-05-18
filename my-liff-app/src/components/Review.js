// src/components/Review.js
import React from 'react';
import { evaluations } from '../data/dummyData';

const Review = () => {
  return (
    <div>
      <h2>評価</h2>
      <ul>
        {evaluations.map((evaluation, index) => (
          <li key={index}>
            評価値: {evaluation.evaluation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Review;
