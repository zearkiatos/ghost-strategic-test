class DesignPage {
  designLink = () => cy.contains("Design");

  selectSaveButton = () =>
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });

  selectDeleteButton = () =>
    cy.get(".gh-blognav-delete").then(($selects) => {
      const selected = $selects.get(4);
      return selected;
    });

  selectDeleteSecondaryMenuButton = () =>
    cy.get(".gh-blognav-delete").then(($selects) => {
      const selected = $selects.get(5);
      return selected;
    });

  selectInput = (position) =>
    cy.get(".ember-text-field.gh-input.ember-view").then(($selects) => {
      const selected = $selects.get(position);
      return selected;
    });

  selectButton = () =>
    cy.get(".gh-blognav-add").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });

  goToDesignLink = () => {
    this.designLink().click();
  };

  setNewMenuOption = (menuName) => {
    const inputSelected = this.selectInput(8);
    inputSelected.click();
    inputSelected.type(menuName, { force: true });
  };

  setSecondaryMenuOption = (menuName) => {
    const inputSelected = this.selectInput(10);
    inputSelected.click();
    inputSelected.type(menuName, { force: true });
  };

  setNewMenuUrl = (menuName) => {
    const inputSelected = this.selectInput(9);
    inputSelected.click();
    inputSelected.clear({ force: true });
    inputSelected.type(menuName, { force: true });
  };

  setSecondaryMenuUrl = (menuName) => {
    const inputSelected = this.selectInput(11);
    inputSelected.click();
    inputSelected.clear({ force: true });
    inputSelected.type(menuName, { force: true });
  };

  addMenuOption = () => {
    this.selectButton().click();
  };

  save = () => {
    this.selectSaveButton().click();
  };

  delete = () => {
    this.selectDeleteButton().click();
  };

  deleteSecondaryMenu = () => {
    this.selectDeleteSecondaryMenuButton().click();
  };
}

export default DesignPage;
