import axiosWithAuth from "../utils/axiosWithAuth";

const getArticleByIdService = (token, id) => {
  return axiosWithAuth(token).get(`/articles/${id}`);
};

export default getArticleByIdService;
