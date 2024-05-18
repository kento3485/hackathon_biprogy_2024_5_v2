// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>ホーム</h2>
      <nav>
        <ul>
          <li><Link to="/create-recruitment">募集作成</Link></li>
          <li><Link to="/application-status">現在のレンタル状況</Link></li>
          <li><Link to="/user-profile">ユーザープロフィール</Link></li>
          <li><Link to="/rental-details/1">レンタル詳細 (ID: 1)</Link></li>
          <li><Link to="/search-settings">検索設定</Link></li>
          <li><Link to="/review">評価</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
