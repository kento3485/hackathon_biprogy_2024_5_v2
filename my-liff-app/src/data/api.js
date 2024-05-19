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

const RENTAL_API_URL = "https://hook.us1.make.com/i3551egagx1tmo2wsreffhdolevhg7yi";
const APPLICATION_API_URL = "https://hook.eu2.make.com/hyv2ill9ta98o5vwwqxk8jjpu78k5kzy";

export const getRental = async () => {
  try {
    const response = await axios.get(RENTAL_API_URL);
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

export const getApplication = async () => {
  try {
    const response = await axios.get(APPLICATION_API_URL);
    const applications = response.data.map(item => ({
      rental_id: item.rental_id.value,
      applicant_id: item.applicant_id.value,
      start_date: item.start_date.value,
      status: item.status.value,
    }));
    return applications;
  } catch (error) {
    console.error("Failed to fetch applications", error);
    throw error;
  }
};


//   // src/data/api.js

// export const getApplication = async () => {
//   // ダミーデータの代わりに実際のAPIからデータを取得するコードをここに追加します。
//   const applications = [
//     {
//       rental_id: 1,
//       applicant_id: 1,
//       start_date: '2024-05-18',
//       status: '応募中',
//     },
//     {
//       rental_id: 2,
//       applicant_id: 1,
//       start_date: '2024-05-19',
//       status: '貸出待ち',
//     },
//     {
//       rental_id: 3,
//       applicant_id: 1,
//       start_date: '2024-05-20',
//       status: '貸出中',
//     },
//     {
//       rental_id: 4,
//       applicant_id: 1,
//       start_date: '2024-05-21',
//       status: '応募失敗',
//     },
//     {
//       rental_id: 5,
//       applicant_id: 1,
//       start_date: '2024-05-22',
//       status: '貸出終了',
//     },
//   ];

//   return new Promise((resolve) => {
//     setTimeout(() => resolve(applications), 1000);
//   });
// };

export const createRecruitment = async (data) => {
  console.log('Sending data to the server...', data);
  
  try {
    const response = await fetch('https://hook.eu2.make.com/g14c99e6l1msn6wk0axl5uszxcuiigdb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Data successfully sent to the server', result);
    return result;
  } catch (error) {
    console.error('Failed to send data to the server', error);
    throw error;
  }
};