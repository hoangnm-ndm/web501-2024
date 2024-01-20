import axiosClient from ".";

export const getAll = () => {
  return axiosClient.get(`products`);
};
export const getOne = (id) => {
  return axiosClient.get(`products/${id}`);
};
export const deleteOne = (id) => {
  return axiosClient.delete(`products/${id}`);
};
export const createOne = (data) => {
  return axiosClient.post(`products`, data);
};
export const updateOne = (id, data) => {
  return axiosClient.put(`products/${id}`, data);
};
