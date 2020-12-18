import service from './service';

export const doLoginApi = data => {
  return service.post(
    `/users/login`, data
  )
};

export const doRegisterApi = data => {
  return service.post(
    `/users/register`, data
  )
};

export const getUserApi = id => {
  return service.get(
    `/users/${id}`,
  )
};

export const getAllUsersApi = () => {
  return service.get(
    `/users`,
  )
};

export const followUserApi = (id) => {
  return service.post(
    `/users/follow/${id}`,
  )
};

export const unFollowUserApi = (id) => {
  return service.post(
    `/users/unfollow/${id}`,
  )
};
