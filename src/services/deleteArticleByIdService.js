import axiosWithAuth from "../utils/axiosWithAuth";

const deleteArticleByIdService = (artileID, token) => {
  return axiosWithAuth(token).delete(`/articles/${artileID}`);
};

export default deleteArticleByIdService;
