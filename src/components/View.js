import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Article from "./Article";
import EditForm from "./EditForm";
import ContextObject from "../context/context";
import articleService from "../services/articleServices";
import deleteArticleByIdService from "../services/deleteArticleByIdService";
import replaceArticleByIdService from "../services/replaceArticleByIdService";
const View = (props) => {
  const [articles, setArticles] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState();
  const { cb_getToken, cb_hasToken } = useContext(ContextObject);

  const handleDelete = (id) => {
    deleteArticleByIdService(id, cb_getToken())
      .then((res) => {
        // console.log("res = ", res);
        setArticles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (article) => {
    console.log("new article = ", article);
    replaceArticleByIdService(cb_getToken(), article)
      .then((res) => {
        console.log("res = ", res);
        setArticles(res.data);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  const handleEditSelect = (id) => {
    setEditing(true);
    setEditId(id);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  useEffect(() => {
    articleService(cb_getToken())
      .then((res) => {
        setArticles(res.data);
      })
      .catch((error) => {
        // console.log("error = ", error);
      });
  }, []);

  return (
    <ComponentContainer>
      <HeaderContainer>View Articles</HeaderContainer>
      <ContentContainer flexDirection="row">
        <ArticleContainer>
          <p>token = {cb_hasToken() ? cb_getToken() : "No Token"}</p>
          <p>cb_hasToken() return {JSON.stringify(cb_hasToken())}</p>
          {articles.map((article) => {
            return (
              <ArticleDivider key={article.id}>
                <Article
                  key={article.id}
                  article={article}
                  handleDelete={handleDelete}
                  handleEditSelect={handleEditSelect}
                />
              </ArticleDivider>
            );
          })}
        </ArticleContainer>

        {editing && (
          <EditForm
            editId={editId}
            handleEdit={handleEdit}
            handleEditCancel={handleEditCancel}
          />
        )}
      </ContentContainer>
    </ComponentContainer>
  );
};

export default View;

//Task List:
//1. Build and import axiosWithAuth module in the utils.
//2. When the component mounts, make an http request that adds all articles to state.
//3. Complete handleDelete method. It should make a request that delete the article with the included id.
//4. Complete handleEdit method. It should make a request that updates the article that matches the included article param.

const Container = styled.div`
  padding: 0.5em;
`;
const HeaderContainer = styled.h1`
  border-bottom: solid black 2px;
  padding: 1em;
  margin: 0;
  font-size: 1.5em;
  background: black;
  color: white;
`;

const ArticleDivider = styled.div`
  border-bottom: 1px solid black;
  padding: 1em;
`;

const ComponentContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
`;

const ArticleContainer = styled.div`
  background: grey;
`;
