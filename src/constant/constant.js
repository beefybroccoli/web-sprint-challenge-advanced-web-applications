export const SERVER_PORT = 5010;
// export const SERVER_PORT = 5000;
export const API_URL_Base = `http://localhost:${SERVER_PORT}/api`;
export const API_URL_LOGIN = `http://localhost:${SERVER_PORT}/api/login`;
export const API_URL_ARTICLES = `http://localhost:${SERVER_PORT}/api/articles`;
export const API_URL_LOGOUT = `http://localhost:${SERVER_PORT}/api/logout`;
// * **[POST]** * to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda', password: 'School' }` for a successful login.

// * **[POST]** * to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

// * **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

// * **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

// * **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

// * **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

// * **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

/*
#### Article Data Structure
```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```
*/
