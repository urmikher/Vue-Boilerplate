export default {
  props: ['modalPost', 'showModal'],
  data() {
    return { };
  },
  methods: {
    close() {
      this.$emit('closeModel');
    },
    savePost({ title, body }) {
      if (!title || !body) {
        return;
      }
      this.$store.dispatch('ADD_NEW_POST', { title, body });
      this.close();
    },
    saveOrUpdatePost(post) {
      if (!post.title || !post.body) {
        return;
      }
      if (post.id || post.userId) {
        this.$store.dispatch('UPDATE_EXISTING_POST', post);
      } else {
        this.$store.dispatch('ADD_NEW_POST', post);
      }
      this.close();
    },
  },
};
