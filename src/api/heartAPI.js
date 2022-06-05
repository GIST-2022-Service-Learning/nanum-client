import api from "./baseAPI";

export const createHeart = async (boardId) => {
  const response = await api.get(`boards/${boardId}/heart`);
  return response;
};

export const deleteHeart = async (boardId) => {
  const response = await api.post(`boards/${boardId}/heart`);
  return response;
};
