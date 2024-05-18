// src/components/SearchSettings.js
import React, { useState } from 'react';

const SearchSettings = () => {
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");

  const handleSearch = () => {
    // 検索ロジックをここに追加
    console.log("検索設定", { type, cost });
  };

  return (
    <div>
      <h2>検索設定</h2>
      <form>
        <label>
          種類:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          費用:
          <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
        </label>
        <button type="button" onClick={handleSearch}>検索</button>
      </form>
    </div>
  );
};

export default SearchSettings;
