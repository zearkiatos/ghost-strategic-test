class PublishedPostPage {
  publishedPostLink = () => cy.contains("Published");

  selectRadioButton = () =>
    cy.get(".gh-publishmenu-radio").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });
  postMenu = () =>
    cy.get(".gh-publishmenu-trigger").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  goToPublishedPost = () => {
    this.publishedPostLink().click();
  };

  openMenu = () => {
    this.postMenu().click();
  };

  radioButton = () => {
    this.selectRadioButton().click();
  };
}

export default PublishedPostPage;
