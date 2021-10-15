import axiosWithAuth from "../utils/axiosWithAuth";

const editArticleByIdService = (artileID, token) => {
  return axiosWithAuth(token).put(`/articles/${artileID}`);
};

export default editArticleByIdService;
