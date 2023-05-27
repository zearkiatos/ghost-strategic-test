const MOCKAROO_API_URL = "https://my.api.mockaroo.com/posts.json?key=99232830";
const MOCKAROO_API_URL_SPECIAL_CHARS = "https://my.api.mockaroo.com/pages-special-characters-title.json?key=0a3aea40";
const headers = {
  "Content-Type": "application/json"
};
export class PostClient {
  getPosts() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getPosts");
    });
    return cy.get("@getPosts");
  }


  getPostSpecialChars() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL_SPECIAL_CHARS,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getPostSpecialChars");
    });
    return cy.get("@getPostSpecialChars");
  }
}
