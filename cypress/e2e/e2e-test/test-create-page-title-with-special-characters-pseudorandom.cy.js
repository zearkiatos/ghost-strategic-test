import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PagesPage from '../../pages/PagesPage'
import PageEditorPage from '../../pages/PageEditorPage'
import { PageClient } from "../../../clientApi/pageClient";




describe('Escenario creación de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()
  const pageClient = new PageClient();

  

  beforeEach(function() {
  
    

  })

  it('Crear una página con título con caracteres especiales', () => {

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
     

      //obteniendo datos pseudoaleatorios

      pageClient.getPages().then(function (body) {
        const rand = parseInt((Math.random() * 1000).toFixed(0), 10);
        cy.log(body);

        cy.wait(5000);
        pageEditorPage.ingresarTitulo(body[rand].title);
        pageEditorPage.ingresarCuerpo(body[rand].body );

      });

      
     
      
      
      pageEditorPage.menuPublicar()
     
      pageEditorPage.publicarPagina()
      

      // Then

      cy.contains('Published').should('exist')
      
    }); 

    
  })

})