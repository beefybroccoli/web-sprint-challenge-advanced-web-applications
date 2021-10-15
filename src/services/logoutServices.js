import axiosWithAuth from "../utils/axiosWithAuth";

const logoutService = (token) => {
  return axiosWithAuth(token).post("/logout");
};

export default logoutService;
