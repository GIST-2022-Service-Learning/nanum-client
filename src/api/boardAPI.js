import api from "./baseAPI";

export const getBoard = async () => {
  const response = await api.get(`main`);
  return response;
};

export const getMyBoard = async () => {
  const response = await api.get(`board/me`);
  return response;
};

export const getHeartBoard = async () => {
  const response = await api.get(`board/me/heart`);
  return response;
};

export const createBoard = async (request) => {
  const response = await api.post(`boards`, request);
  return response;
};
