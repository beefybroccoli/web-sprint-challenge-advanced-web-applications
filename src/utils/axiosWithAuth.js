import axios from "axios";
import { API_URL_Base } from "../constant/constant";

const axiosWithAuth = (token) => {
  return axios.create({
    baseURL: API_URL_Base,
    headers: {
      authorization: token,
    }
  });
};

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth
