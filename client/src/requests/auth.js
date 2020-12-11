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
