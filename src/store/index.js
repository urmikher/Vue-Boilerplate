import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import axios from 'axios';


Vue.use(Vuex);

const BASE_URL = 'http://jsonplaceholder.typicode.com';
const POST_URL = `${BASE_URL}/posts`;
const store = new Vuex.Store({
  state: {
    posts: [],
  },
  actions: {
    GET_POSTS({ commit }) {
      axios.get(POST_URL)
        .then(({ data }) => commit('SET_POSTS', { posts: data }));

    },
    ADD_NEW_POST({ commit }, post) {
      post.userId = 1;
      axios.post(POST_URL, post)
        .then(({ data }) => commit('ADD_POST', data))
        .catch(err => false);
    },
    UPDATE_EXISTING_POST({ commit }, post) {
      axios.put(`${POST_URL}/${post.id}`, post)
        .then(({ data }) => commit('UPDATE_POST', data))
        .catch(err => false);
    },
    DELETE_POST({ commit }, id) {
      axios.delete(`${POST_URL}/${id}`)
        .then(() => commit('DELETE_EXISTING_POST', id))
        .catch(err => false);
    },
  },
  mutations: {
    SET_POSTS(state, { posts }) {
      state.posts = posts; // eslint-disable-line no-param-reassign
    },
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    UPDATE_POST(state, post) {
      const postIndex = _.findIndex(state.posts, { id: post.id });
      state.posts[postIndex] = post; // eslint-disable-line no-param-reassign
    },
    DELETE_EXISTING_POST(state, id) {
      state.posts = _.remove(state.posts,  // eslint-disable-line no-param-reassign
        post => post.id !== id);
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});

export default store;
