import axiosClient from ".";

export const loginAPI = (user) => {
  return axiosClient.post(`login`, user);
};

export const registerAPI = (user) => {
  return axiosClient.post(`register`, user);
};
