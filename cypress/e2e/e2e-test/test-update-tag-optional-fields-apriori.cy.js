import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import TagsPage from '../../pages/TagsPage'
import TagsEditorPage from '../../pages/TagsEditorPage'

import { getRandomNumberTag, getRandomTag } from '../../../mock/tag'

describe('Editar un Tag únicamente con campos opcionales', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()

  const tag = getRandomTag();
  const tagColor = getRandomNumberTag();

  beforeEach(function() {
  })    
    let colorTag = tagColor.tag_color
    let slugTag = tag.tag_slug
    let descriptionTag = tag.tag_description
    let metaTitle = tag.tag_meta_title
    let metaDescription = tag.tag_meta_description
    let metaUrl = tag.tag_meta_URL
    let twitterTitle = tag.tag_twitter_title
    let twitterDescription = tag.tag_twitter_description
    let facebookTitle = tag.tag_facebook_title
    let facebookDescription = tag.tag_facebook_description
    let tagHeader = tag.tag_code_injection_header
    let tagFooter = tag.tag_code_injection_footer

    it('Editar un Tag únicamente con campos opcionales', () => {
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

        tagsEditorPage.limpiarColor()
        tagsEditorPage.editarColor(colorTag)

        tagsEditorPage.limpiarSlug()
        tagsEditorPage.ingresarSlug(slugTag)
        
        tagsEditorPage.limpiarDescripcion()
        tagsEditorPage.ingresarDescripcion(descriptionTag)

        tagsPage.habilitarMeta()
        tagsEditorPage.limpiarMetaTitle()
        tagsEditorPage.ingresarTituloMetaData(metaTitle)
        tagsEditorPage.limpiarMetaDescription()
        tagsEditorPage.ingresarDescripcionMetaData(metaDescription)
        tagsEditorPage.limpiarMetaUrl()
        tagsEditorPage.ingresarUrlMetaData(metaUrl)

        
        tagsPage.habilitarTwitter()
        tagsEditorPage.limpiarTwitterTitle()
        tagsEditorPage.ingresarTituloTwitter(twitterTitle)
        tagsEditorPage.limpiarTwitterDescription()
        tagsEditorPage.ingresarDescripcionTwitter(twitterDescription)

        tagsPage.habilitarFacebook()
        tagsEditorPage.limpiarFacebookTitle()
        tagsEditorPage.ingresarTituloFacebook(facebookTitle)
        tagsEditorPage.limpiarFacebookDescription()
        tagsEditorPage.ingresarDescripcionFacebook(facebookDescription)

        tagsEditorPage.guardarTag()

        // Then
        cy.contains('Saved').should('exist')
        });     
    })
});