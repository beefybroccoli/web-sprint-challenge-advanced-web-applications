import axios from "axios";
import { API_URL_LOGIN } from "../constant/constant";

/**
 *
 * @param {*} credential {username:text, password:text}
 */
const loginService = (credential) => {
  return axios.post(API_URL_LOGIN, credential);
};

export default loginService;
