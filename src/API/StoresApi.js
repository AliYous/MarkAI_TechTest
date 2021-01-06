import axios from "axios";

const baseURL = 'https://markai.getsandbox.com';


export const fetchAllStoresList = async () => {
  return axios({
    method: 'get',
    url: `${baseURL}/stores`,
  });
}