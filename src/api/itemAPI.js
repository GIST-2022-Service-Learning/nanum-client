import api from "./baseAPI";

export const getItems = async () => {
  const response = await api.get(`item`);
  return response;
};

export const putItem = async (itemRequest) => {
  const response = await api.post(`item`, itemRequest);
  return response.data;
};
