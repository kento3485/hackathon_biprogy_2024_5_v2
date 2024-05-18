// src/data/dummyData.js
export const users = [
    {
      id: 1,
      name: "ビジネス ロジ子",
      call_num: "000-0000-0000",
      address: "東京都渋谷区1-2-3",
      mail_address: "example@gmail.com",
      icon: "https://via.placeholder.com/150",
    },
    // 他のユーザーデータ...
  ];
  
  export const rentals = [
    {
      id: 1,
      type: "車",
      comment: "レンタル物詳細説明文",
      start_date: "2024-05-19",
      end_date: "2024-05-20",
      cost: "500円",
      rental_id: 1,
    },
    {
      id: 2,
      type: "自転車",
      comment: "レンタル物詳細説明文",
      start_date: "2024-05-21",
      end_date: "2024-05-22",
      cost: "200円",
      rental_id: 2,
    },
    // 他のレンタルデータ...
  ];
  
  export const applications = [
    {
      rental_id: 1,
      applicant_id: 1,
      start_date: "2024-05-18",
      status: "貸出中",
    },
    // 他の応募データ...
  ];
  
  export const evaluations = [
    {
      evaluation: 4.0,
      assessor_id: 1,
      employee_id: 1,
    },
    // 他の評価データ...
  ];
  