// src/components/ApplicationStatus.js
import React from "react";
import { applications } from "../data/dummyData";

const ApplicationStatus = () => {
  return (
    <div>
      <h2>現在のレンタル状況</h2>
      <ul>
        {applications.map((app) => (
          <li key={app.rental_id}>
            レンタルID: {app.rental_id}, 状態: {app.status}, 開始日: {app.start_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationStatus;
