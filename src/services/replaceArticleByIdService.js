import axiosWithAuth from "../utils/axiosWithAuth";

const replaceArticleByIdService = (token, article) => {
  return axiosWithAuth(token).put(`/articles/${article.id}`, article);
};

export default replaceArticleByIdService;

/*
 **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. 
 
 Send the updated article object as the `body` of the request. 
 
 **This endpoint can only be accessed by an authenticated user.**
 */
