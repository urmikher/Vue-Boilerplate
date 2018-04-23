import { mapState } from 'vuex';

// Components
import PostDetail from '@/components/posts/post-detail/PostDetail';
import PostForm from '@/components/posts/post-form/PostForm';

export default {
  mounted() {
    this.$store.dispatch('GET_POSTS');
  },
  computed: mapState([
    'posts',
  ]),
  data() {
    return {
      showModal: false,
      isEdit: false,
      modalPost: {},
    };
  },
  methods: {
    openModal(isEdit, post) {
      this.showModal = true;
      this.isEdit = isEdit;
      this.modalPost = isEdit && post || {}; // eslint-disable-line no-mixed-operators
    },
    closeModal() {
      this.showModal = false;
      this.isEdit = false;
    },
    deletePost(id) {
      this.$store.dispatch('DELETE_POST', id);
    },
  },
  components: { PostDetail, PostForm },
};
