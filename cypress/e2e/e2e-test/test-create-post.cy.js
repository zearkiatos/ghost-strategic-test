import { faker } from "@faker-js/faker";
import SitePage from "../../pages/SitePage";
import SigninPage from "../../pages/SigninPage";
import PostEditorPage from "../../pages/PostEditorPage";
import PostsPage from "../../pages/PostsPage";
import ScheduledPostPage from "../../pages/ScheduledPostPage";
import { getRandomPost } from "../../../mock/post";
import { PostClient } from "../../clientApi/postClient";

describe("Post create test end to end suite", () => {
  const sitePage = new SitePage();
  const signinPage = new SigninPage();
  const postEditorPage = new PostEditorPage();
  const postsPage = new PostsPage();
  const scheduledPostPage = new ScheduledPostPage();
  const postClient = new PostClient();

  it("Should create a new post with random data", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });

    cy.fixture("login-data.json").then(function (user) {
      this.user = user;
      const title = faker.lorem.word(3);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(1000);
      sitePage.irAPosts();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(title);
      postEditorPage.ingresarCuerpo(faker.lorem.lines(5));
      postEditorPage.menuPublicar();
      postEditorPage.publicarPost();
      cy.wait(2000);
      sitePage.irAPosts();
      cy.wait(3000);

      // Then
      cy.contains(title).should("exist");
    });
  });

  it("Should get an error when try to create a scheduled post less than 2 minutes with data apriorir", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);
      const post = getRandomPost();

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(3000);
      sitePage.irAPosts();
      sitePage.goToScheduledPost();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(post.title);
      postEditorPage.ingresarCuerpo(post.description);
      postEditorPage.menuPublicar();
      scheduledPostPage.selectSchedule();
      scheduledPostPage.setTimeWithCurrent();
      scheduledPostPage.schedule();
      cy.wait(3000);

      // Then

      cy.contains("Must be at least 2 mins in the future").should("exist");
    });
  });

  it("Should create a new scheduled post with pseudo random data", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });

    cy.fixture("login-data.json").then(function (user) {
      postClient.getPosts().then(function (body) {
        this.user = user;
        const data = body[0];

        // When
        signinPage.ingresarCorreoElectronico(this.user.usuario);
        signinPage.ingresarPassword(this.user.contraseña);
        signinPage.hacerClicEnIniciarSesion();
        cy.wait(1000);
        sitePage.irAPosts();
        postsPage.nuevoPost();
        postEditorPage.ingresarTitulo(data.title);
        postEditorPage.ingresarCuerpo(data.description);
        postEditorPage.menuPublicar();
        postEditorPage.publicarPost();
        cy.wait(2000);
        sitePage.irAPosts();
        cy.wait(3000);

        // Then
        cy.contains(data.title).should("exist");
      });
    });
  });

  it("Should create a new post with a markdown with random data", () => {
    cy.fixture("login-data.json").then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });

    cy.fixture("login-data.json").then(function (user) {
      this.user = user;
      const title = `${faker.lorem.word(3)} with markdown`;
      const markdownBody = "`"+faker.lorem.lines(5)+"`";

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      signinPage.ingresarPassword(this.user.contraseña);
      signinPage.hacerClicEnIniciarSesion();
      cy.wait(3000);
      sitePage.irAPosts();
      postsPage.nuevoPost();
      postEditorPage.ingresarTitulo(title);
      cy.wait(3000);
      scheduledPostPage.selectBodyEditor();
      scheduledPostPage.clickOnAddFeatureButton();
      scheduledPostPage.selectMarkdownOption();
      scheduledPostPage.typeOnMarkdownEditor(markdownBody);
      postEditorPage.menuPublicar();
      postEditorPage.publicarPost();
      cy.wait(2000);
      sitePage.irAPosts();
      cy.wait(3000);

      // Then
      cy.contains(title).should("exist");
    });
  });
});
