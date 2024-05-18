// src/components/CreateRecruitment.js
import React, { useState } from "react";
import { rentals } from "../data/dummyData";

const CreateRecruitment = () => {
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");

  const handleCreate = () => {
    // ダミーデータに新しい募集を追加する処理
    console.log("募集作成", { type, comment, cost, duration });
  };

  return (
    <div>
      <h2>募集作成</h2>
      <form>
        <label>
          種類:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
        <label>
          コメント:
          <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
        <label>
          費用:
          <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
        </label>
        <label>
          期間:
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <button type="button" onClick={handleCreate}>募集作成</button>
      </form>
    </div>
  );
};

export default CreateRecruitment;
