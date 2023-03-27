import {
  fetchList,
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    return fetchNewsList()
      .then(({ data }) => context.commit('SET_NEWS', data))
      .catch((error) => console.log(error));
  },
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
    commit('SET_JOBS', response.data);
    return response;
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response; // async, await을 사용했을 땐, return 안해줘도 순서가 꼬이지 않는 것 같다.
  },
};
