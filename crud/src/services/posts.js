import useApi from 'src/composables/UserApi';

const postService = () => {
  const { list, post, update, remove } = useApi('posts');

  return { list, post, update, remove };
};

export default postService;
