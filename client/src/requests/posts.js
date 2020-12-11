import service from './service';

export const addPostApi = data => {
  return service.post(
    `/posts`, data
  )
};

export const getPostsApi = () => {
  return service.get(
    `/posts`
  )
};