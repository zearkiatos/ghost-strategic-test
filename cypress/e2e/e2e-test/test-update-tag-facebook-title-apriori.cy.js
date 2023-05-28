import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

import { getRandomJunkTag } from '../../../mock/tag'

describe('Actualizar un tag habilitar opción Facebook Titulo - Unicamente caracteres especiales', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomJunkTag();

  beforeEach(function() {
  })
    let title = tag.tag_facebook_title

    it('Actualizar un tag habilitar opción Facebook Titulo - Unicamente caracteres especiales', () => {
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
        tagsPage.habilitarFacebook()


        tagsEditorPage.limpiarFacebookTitle()
        tagsEditorPage.ingresarTituloFacebook(title)    
        tagsEditorPage.guardarTag()

        // Then
        cy.contains('Saved').should('exist')
        });     
    })
});