// src/components/RentalDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { rentals } from '../data/dummyData';

const RentalDetails = () => {
  const { id } = useParams();  // useParams フックを使用して URL パラメータを取得
  const rentalId = parseInt(id);
  const rental = rentals.find(r => r.id === rentalId);

  if (!rental) {
    return <div>レンタル情報が見つかりません</div>;
  }

  return (
    <div>
      <h2>レンタル詳細</h2>
      <p>種類: {rental.type}</p>
      <p>コメント: {rental.comment}</p>
      <p>開始日: {rental.start_date}</p>
      <p>終了日: {rental.end_date}</p>
      <p>費用: {rental.cost}</p>
    </div>
  );
};

export default RentalDetails;
