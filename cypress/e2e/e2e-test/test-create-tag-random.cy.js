import SitePage from '../pages/SitePage'
import SigninPage from '../pages/SigninPage'
import TagsPage from '../pages/TagsPage'
import TagsEditorPage from '../pages/TagsEditorPage'
import PagesPage from '../pages/PagesPage'
import PageEditorPage from '../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario creación de Tags', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const tagsPage = new TagsPage()
  const tagsEditorPage = new TagsEditorPage()
  const tagName= faker.lorem.word()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()

  beforeEach(function() {
  })

  it('Crear un nuevo Tag', () => {    
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()


      sitePage.irATags()
      tagsPage.nuevoTag()
      tagsEditorPage.ingresarNombre(tagName)
      tagsEditorPage.ingresarSlug(tagName)
      tagsEditorPage.ingresarDescripcion(faker.lorem.paragraph(1))
      tagsEditorPage.ingresarColor(faker.color.rgb({ prefix: '#', casing: 'lower' }))
      tagsEditorPage.guardarTag()
      
      // Then

      cy.contains('Saved').should('exist')          
    });     
  })

  it('Consultar Tag previamente creado', ()=>{
    const  testCase="consultar-tag";
    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
     
      sitePage.irATags()

      // Then

      cy.contains(tagName).should('exist')    
    }); 
  });

it('crear una página asociada al tag previamente creado', () =>{
    const  testCase="crear-pagina-con-tag";
    const aTitle= faker.lorem.sentence()
    const aBody= faker.lorem.paragraphs(2)
    cy.fixture('login-data.json').then(function (user) {
    this.user = user;
    // Given
    cy.visit(this.user.urlLogin);  

    // When
    signinPage.ingresarCorreoElectronico(this.user.usuario)
    signinPage.ingresarPassword(this.user.contraseña)
    signinPage.hacerClicEnIniciarSesion()

    sitePage.irAPaginas()  

    pagesPage.nuevaPagina()  

    pageEditorPage.ingresarTitulo(aTitle)
    pageEditorPage.ingresarCuerpo(aBody)

    pageEditorPage.abrirSettings()
    pageEditorPage.abrirListaTags()
        
    // Then
    cy.get('ul.ember-power-select-options').first().find('li').should('exist').and('contain.text', tagName);                 
    }); 
  });
})