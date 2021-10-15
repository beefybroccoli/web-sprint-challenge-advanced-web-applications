import axiosWithAuth from "../utils/axiosWithAuth";

const replaceArticleByIdService = (token, article) => {
  return axiosWithAuth(token).put(`/articles/${article.id}`, article);
};

export default replaceArticleByIdService;
