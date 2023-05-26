const MOCKAROO_API_URL = "https://my.api.mockaroo.com/login-data.json?key=0a3aea40";
const headers = {
  "Content-Type": "application/json"
};
export class SigninClient {
  getAccounts() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getAccounts");
    });
    return cy.get("@getAccounts");
  }
}