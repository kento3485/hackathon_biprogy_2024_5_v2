// src/data/api.js

// export const getRental = async () => {
//     // ダミーデータの代わりに実際のAPIからデータを取得するコードをここに追加します。
//     const rentals = [
//       {
//         id: 1,
//         type: '車',
//         comment: 'レンタル物詳細説明文',
//         start_date: '2024-05-19',
//         end_date: '2024-05-20',
//         cost: '500円',
//       },
//       {
//         id: 2,
//         type: '自転車',
//         comment: 'レンタル物詳細説明文',
//         start_date: '2024-05-21',
//         end_date: '2024-05-22',
//         cost: '200円',
//       },
//       // 他のレンタルデータ...
//     ];
  
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(rentals), 1000);
//     });
//   };
  

import axios from 'axios';

const API_URL = "https://hook.us1.make.com/i3551egagx1tmo2wsreffhdolevhg7yi";

export const getRental = async () => {
  try {
    const response = await axios.get(API_URL);
    const rentals = response.data.map(item => ({
      id: item.rental_id.value,
      type: item.type.value,
      comment: item.comment.value,
      start_date: item.start_data.value,
      end_date: item.end_date.value,
      cost: item.cost.value,
    }));
    return rentals;
  } catch (error) {
    console.error("Failed to fetch rentals", error);
    throw error;
  }
};


  // src/data/api.js

export const getApplication = async () => {
  // ダミーデータの代わりに実際のAPIからデータを取得するコードをここに追加します。
  const applications = [
    {
      rental_id: 1,
      applicant_id: 1,
      start_date: '2024-05-18',
      status: '応募中',
    },
    {
      rental_id: 2,
      applicant_id: 1,
      start_date: '2024-05-19',
      status: '貸出待ち',
    },
    {
      rental_id: 3,
      applicant_id: 1,
      start_date: '2024-05-20',
      status: '貸出中',
    },
    {
      rental_id: 4,
      applicant_id: 1,
      start_date: '2024-05-21',
      status: '応募失敗',
    },
    {
      rental_id: 5,
      applicant_id: 1,
      start_date: '2024-05-22',
      status: '貸出終了',
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(applications), 1000);
  });
};
