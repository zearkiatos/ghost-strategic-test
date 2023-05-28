import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

const { faker } = require('@faker-js/faker');

describe('Actualizar un Tag existente con todos los campos opcionales y obligatorios', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  beforeEach(function() {
  })

  it('Actualizar un Tag existente con todos los campos opcionales y obligatorios', () => {
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)

      signinPage.ingresarPassword(this.user.contraseña)

      signinPage.hacerClicEnIniciarSesion()

      sitePage.irATags()

      tagsPage.editarTag()
      
      tagsEditorPage.ingresarSlug('Getting Started')

      tagsEditorPage.ingresarDescripcion(faker.lorem.words(1))

      tagsEditorPage.guardarTag()
      // Then

      cy.contains('Saved').should('exist')
      
    });     
  })
});