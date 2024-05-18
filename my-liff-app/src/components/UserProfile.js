// src/components/UserProfile.js
import React from 'react';
import { users } from '../data/dummyData';

const UserProfile = () => {
  const user = users[0]; // ダミーユーザーデータの取得

  return (
    <div>
      <h2>ユーザープロフィール</h2>
      <img src={user.icon} alt="ユーザーアイコン" />
      <p>名前: {user.name}</p>
      <p>電話番号: {user.call_num}</p>
      <p>住所: {user.address}</p>
      <p>メールアドレス: {user.mail_address}</p>
    </div>
  );
};

export default UserProfile;
