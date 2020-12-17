import service from './service';

export const getProfileApi = id => {
  return service.get(
    `/profile/${id}`,
  )
};

export const getProfilePostsApi = id => {
  return service.get(
    `/profile/${id}/posts`,
  )
};
