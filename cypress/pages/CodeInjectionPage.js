class CodeInjectionPage {
  codeInjectionLink = () => cy.contains("Code injection");

  selectSaveButton = () =>
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });

  codeEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(1);
      return selected;
    });

  codeEditorHeader = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });

  goToCodeInjection = () => {
    this.codeInjectionLink().click({ force: true });
  };

  selectCodeEditor = (code = "<h1>Hello World!</h1>") => {
    this.codeEditor().click({ force: true });
    this.codeEditor().type(code);
  };

  selectCodeEditorHeader = (code = "<h1>Hello World!</h1>") => {
    this.codeEditorHeader().click({ force: true });
    this.codeEditorHeader().type(code);
  };

  deleteHtml = () => {
    this.codeEditor().invoke("remove");
  };

  deleteHtmlHeader = () => {
    this.codeEditorHeader().invoke("remove");
  };

  save = () => {
    this.selectSaveButton().click();
  };
}

export default CodeInjectionPage;
