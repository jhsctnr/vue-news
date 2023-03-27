import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchNewsList = async () => {
  try {
    const response = await axios.get(`${config.baseUrl}news/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchAskList = async () => {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchJobsList = async () => {
  try {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserInfo = async (userName) => {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchCommentItem = async (id) => {
  try {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchList,
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
};
