import liff from '@line/liff';

// src/liff.js
export const initializeLiff = async () => {
    const liffId = "2005195725-Gw5kJLoj"
    if (!liffId) {
      throw new Error('LIFF ID is not defined');
    }
  
    try {
      await liff.init({ liffId });
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    } catch (error) {
      console.error('LIFF initialization failed', error);
    }
  };
  
  export const getProfile = async () => { // 
    try {
      const profile = await liff.getProfile();
      return profile;
    } catch (error) {
      console.error('Failed to get profile', error);
    }
  };
  