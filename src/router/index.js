import Vue from 'vue';
import Router from 'vue-router';
import PostList from '@/components/posts/Posts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: PostList,
    },
  ],
});
