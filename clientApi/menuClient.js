const MOCKAROO_API_URL = "https://my.api.mockaroo.com/menus.json?key=99232830";
const headers = {
  "Content-Type": "application/json"
};
export class MenuClient {
  getMenus() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getMenus");
    });
    return cy.get("@getMenus");
  }
}
