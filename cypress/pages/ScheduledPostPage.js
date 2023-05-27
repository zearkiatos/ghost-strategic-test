class ScheduledPostPage {
  newPostLink = () => cy.contains("New post");

  selectScheduleRadioButton = () =>
    cy.get(".gh-publishmenu-radio").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });
  schedulePost = () =>
    cy.get(".gh-publishmenu-button").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  inputTime = () =>
    cy.get(".gh-date-time-picker-time>input").then(($selects) => {
      let selected = $selects.get(0);
      return selected;
    });

  addFeatureButton = () =>
    cy
      .get(
        "button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal"
      )
      .then(($selects) => {
        let selected = $selects.get(0);
        return selected;
      });

  bodyEditor = () =>
    cy
      .get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content")
      .then(($selects) => {
        let selected = $selects.get(0);
        return selected;
      });

  markdownOption = () =>
    cy.get("div[title='Markdown']")

  htmlOption = () =>
    cy
      .get(
        "div.f8.lh-heading.darkgrey.tracked-1.fw4.ma0.ml4.flex-grow-1.truncate"
      )
      .then(($selects) => {
        let selected = $selects.get(2);
        return selected;
      });

  bookmarkOption = () =>
    cy
      .get(
        "div.f8.lh-heading.darkgrey.tracked-1.fw4.ma0.ml4.flex-grow-1.truncate"
      )
      .then(($selects) => {
        let selected = $selects.get(5);
        return selected;
      });

  markdownEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  htmlEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      let selected = $selects.get(1);
      return selected;
    });

  bookmark = () => cy.get("input[name='url']");

  nuevoPost = () => {
    this.newPostLink().click();
  };

  selectSchedule = () => {
    this.selectScheduleRadioButton().click();
  };

  schedule = () => {
    this.schedulePost().click();
  };

  clickOnAddFeatureButton = () => {
    this.addFeatureButton().click({ force: true });
  };

  setTimeWithCurrent = () => {
    const date = new Date();
    let hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    this.inputTime().clear();
    this.inputTime().type(`${hour}:${minutes.toString().padStart(2, "0")}`);
  };

  setTime = (extraMinutes = 10) => {
    const date = new Date();
    let hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const withMinutes =
      minutes + extraMinutes >= 59 ? extraMinutes : minutes + extraMinutes;

    hour = minutes + extraMinutes >= 59 ? hour + 1 : hour;
    hour = hour > 23 ? 0 : hour;

    this.inputTime().clear();
    this.inputTime().type(`${hour}:${withMinutes.toString().padStart(2, "0")}`);
  };

  selectBodyEditor = () => {
    this.bodyEditor().click();
  };

  selectMarkdownOption = () => {
    this.markdownOption().click({ force: true });
  };

  typeOnMarkdownEditor = (markdownText) => {
    this.markdownEditor().click();
    this.markdownEditor().type(markdownText);
  };

  typeOnHtmlEditor = (htmlCode) => {
    this.htmlEditor().click();
    this.htmlEditor().type(htmlCode);
  };

  selectHtmlOption = () => {
    this.htmlOption().click();
  };

  selectBookmarkOption = () => {
    this.bookmarkOption().click();
  };

  typeOnBookmark = (url) => {
    this.bookmark().click();
    this.bookmark().type(url);
  };
}

export default ScheduledPostPage;
