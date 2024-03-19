import axios from "axios";

export const getCat = async () => {
  const OPEN_API_DOMAIN = "https://cataas.com";
  const response = await axios.get(`${OPEN_API_DOMAIN}/cat?json=true`);
  return `${OPEN_API_DOMAIN}/cat/${response.data._id}`;
};
