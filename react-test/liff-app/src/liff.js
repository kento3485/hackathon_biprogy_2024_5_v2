// src/liff.js
import liff from '@line/liff';

export const initLiff = () => {
  return liff.init({ liffId: 'YOUR_LIFF_ID' })
    .then(() => {
      console.log('LIFF initialized');
    })
    .catch(err => {
      console.error('LIFF initialization failed', err);
    });
};
