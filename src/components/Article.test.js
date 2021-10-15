import React from "react";
import "@testing-library/jest-dom";
import { BrowserRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";
import Article from "./Article";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import moment from "moment";
import getArticleByIdService from "../services/getArticleById";
// jest.mock("../services/getArticleById.js");
test("renders component without errors", () => {
  //arrange
  //   const article = jest.fn();
  //   const article = getArticleByIdService.mockResolvedValueOnce({

  const article = {
    id: Date.now(),
    headline:
      "Less than half of Seattle homes have air conditioning. After a deadly heat wave, ‘everybody’ wants it.",
    createdOn: moment()
      .subtract(Math.random() * 10, "days")
      .format(),
    author: "",
    image: 134,
    summary:
      "Triple-digit temperatures led to a spike in demand across the region.",
    body: "Inside the attic of a one-story gray house in a Seattle suburb last week, Jeff Bryson gingerly strapped copper piping across the rafters while wearing a white face mask and a headlamp. The temperature was about 110 degrees in the tight space, which was covered in insulation dust. His work was meant to cool the rest of the home.",
  };
  render(
    <Article
      key={article.id}
      article={article}
      handleDelete={null}
      handleEditSelect={null}
    />
  );

  //act
  const tempArticle = screen.getByTestId("article");
  const h1 = screen.getByTestId("headline");
  const h3 = screen.getByTestId("summary");
  //   console.log("tempArticle = ", tempArticle);
  console.log(
    "h1.textContent =",
    h1.textContent === "" ? "(no text found)" : h1.textContent
  );
  console.log(
    "h3 =",
    h3.textContent === "" ? "(no text found)" : h3.textContent
  );
  //assert
  expect(h1).toHaveTextContent(/less than half/i);
  expect(h3).toHaveTextContent(/led to a/i);
});

/*
const displayFunc = jest.fn();
  fetchShow.mockResolvedValueOnce(sampleTestData);
*/

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.
