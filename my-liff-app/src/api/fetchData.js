require('dotenv').config();
const fetch = require('node-fetch');

const appToIdConverter = {
    'user': process.env.USER_APP_ID,
    'rental': process.env.RENTAL_APP_ID,
    'application': process.env.APPLICATION_APP_ID,
    'evaluation': process.env.EVALUATION_APP_ID,
}

// 環境変数の読み込み
const API_TOKEN = process.env.API_TOKEN;
const SUB_DOMAIN = process.env.SUB_DOMAIN;

/**
 * Cybozu APIからレコードを取得する関数
 * @param {string} app - アプリケーションID
 * @param {string} id - レコードID
 */
async function getCybozuRecord(appString, id) {
    const app = appToIdConverter[appString];
    const url = `https://${SUB_DOMAIN}.cybozu.com/k/v1/record.json`;
    const params = new URLSearchParams({ app, id });
    const apiUrl = `${url}?${params.toString()}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Cybozu-API-Token': API_TOKEN
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 使用例
getCybozuRecord('user', '1');
