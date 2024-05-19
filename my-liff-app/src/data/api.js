// src/data/api.js

export const getRental = async () => {
    // ダミーデータの代わりに実際のAPIからデータを取得するコードをここに追加します。
    const rentals = [
      {
        id: 1,
        type: '車',
        comment: 'レンタル物詳細説明文',
        start_date: '2024-05-19',
        end_date: '2024-05-20',
        cost: '500円',
      },
      {
        id: 2,
        type: '自転車',
        comment: 'レンタル物詳細説明文',
        start_date: '2024-05-21',
        end_date: '2024-05-22',
        cost: '200円',
      },
      // 他のレンタルデータ...
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => resolve(rentals), 1000);
    });
  };
  