const MOCKAROO_API_URL = "https://my.api.mockaroo.com/pages-special-characters-title.json?key=0a3aea40";
const headers = {
  "Content-Type": "application/json"
};
export class PageClient {
  getPages() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getPages");
    });
    return cy.get("@getPages");
  }
}