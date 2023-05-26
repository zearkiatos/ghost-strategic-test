import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PagesPage from '../../pages/PagesPage'
import PageEditorPage from '../../pages/PageEditorPage'

const { faker } = require('@faker-js/faker');

describe('Escenario creación de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const aTitle= faker.lorem.sentence()
  const aBody= faker.lorem.paragraphs(2)

  beforeEach(function() {
  
    

  })

  it('Crear una nueva página con un divider', () => {

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
    });
   

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario)
    
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
     
      sitePage.irAPaginas()
      
      pagesPage.nuevaPagina()
     

      pageEditorPage.ingresarTitulo(aTitle)
     
    
      cy.wait(1000)
      pageEditorPage.ingresarCuerpo(aBody)

      pageEditorPage.ingresarCuerpo('{enter}')
      cy.wait(2000)
      pageEditorPage.clickOnAddFeatureButton();
      pageEditorPage.clickOnAddDivider();
      
      
      pageEditorPage.menuPublicar()
     
      pageEditorPage.publicarPagina()
      

      // Then

      cy.contains('Published').should('exist')
      
    }); 

    
  })

})