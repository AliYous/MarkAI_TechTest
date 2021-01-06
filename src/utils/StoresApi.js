import axios from "axios";

const baseURL = process.env.REACT_APP_DOMAIN;


export const fetchAllStoresList = async () => {
  return axios({
    method: 'get',
    url: `${baseURL}/api/stores`,
  });
}