import { api } from 'boot/axios';

const useApi = (url) => {
  const list = async () => {
    try {
      const { data } = await api.get(url);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  const post = async (info) => {
    try {
      const { data } = await api.post(url, info);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  const update = async (info) => {
    try {
      const { data } = await api.put(`${url}/${info.id}`, info);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await api.delete(`${url}/${id}`);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  };

  return {
    list,
    post,
    update,
    remove
  }

};

export default useApi;
