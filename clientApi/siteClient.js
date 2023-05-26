const MOCKAROO_API_URL = "https://my.api.mockaroo.com/sites.json?key=99232830";
const headers = {
  "Content-Type": "application/json"
};
export class SiteClient {
  getSites() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getSites");
    });
    return cy.get("@getSites");
  }
}
