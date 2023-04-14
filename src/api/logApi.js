import axios from "./axiosBaseQuery";

export const getLogs = async () => {
  const response = await axios.get("timeLogs");
  return response.data;
};

export const addlog = async (body) => {
  const response = await axios.post(`timeLogs`, body);
  return await response;
};
