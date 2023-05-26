const MOCKAROO_API_URL = "https://my.api.mockaroo.com/tag_longer_name.json?key=0a3aea40";
const MOCKAROO_API_URL_LONGER_DESCRIPTION = "https://my.api.mockaroo.com/tag_longer_description.json?key=0a3aea40";
const MOCKAROO_API_URL_TAG_VALID = "https://my.api.mockaroo.com/tag_valid.json?key=0a3aea40";
const MOCKAROO_API_URL_TAG_INVALIDCOLOR = "https://my.api.mockaroo.com/tag_invalid_color.json?key=0a3aea40";
const headers = {
  "Content-Type": "application/json"
};
export class TagClient {

  getTagsInvalidColor() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL_TAG_INVALIDCOLOR,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getTagsInvalidColor");
    });
    return cy.get("@getTagsInvalidColor");
  }

  getValidTags() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL_TAG_VALID,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getValidTags");
    });
    return cy.get("@getValidTags");
  }



  getTags() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getTags");
    });
    return cy.get("@getTags");
  }


  getTagsLongerDescription() {
    cy.request({
      method: "GET",
      url: MOCKAROO_API_URL_LONGER_DESCRIPTION,
      headers
    }).then((response) => {
      cy.wrap(response.body).as("getTagsLongerDescription");
    });
    return cy.get("@getTagsLongerDescription");
  }
}