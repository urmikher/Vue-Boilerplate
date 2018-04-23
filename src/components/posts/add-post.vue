<template lang="html">
  <post-form></post-form>
  <!--<button type="button" class="button" @click="addPost()">Add New Post</button>-->
</template>

<script>

import PostForm from './post-form/PostForm';

export default {
  name: 'addPost',
  data() {
    return {
      modalPost: {},
    };
  },
  methods: {
    addPost(post) {
      this.$store.dispatch('ADD_NEW_POST', { post });
    },
  },
  components: { PostForm },
};
</script>

<style lang="css">
</style>
