import SitePage from '../../pages/SitePage'
import SigninPage from '../../pages/SigninPage'
import PagesPage from '../../pages/PagesPage'
import PageEditorPage from '../../pages/PageEditorPage'
import { getRandomPage, getLongerTitle } from "../../../mock/page";




describe('Escenario creación de páginas', () => {
  const sitePage = new SitePage()
  const signinPage = new SigninPage()
  const pagesPage = new PagesPage()
  const pageEditorPage = new PageEditorPage()

  

  beforeEach(function() {
  
    

  })

  it('Crear una página con título con longitud superior al limite (255)', () => {

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
     
      const title= getLongerTitle();
      pageEditorPage.ingresarTitulo(title.longertitle);

      //obteniendo un cuerpo para la página
      const page= getRandomPage();
     
      pageEditorPage.ingresarCuerpo(page.body);

      pageEditorPage.ingresarTitulo(title.longertitle+'aa');
      
      pageEditorPage.menuPublicar()
     
      pageEditorPage.publicarPagina()
      

      // Then

      cy.contains('Saving failed: Title cannot be longer than 255 characters.').should('exist')
      
    }); 

    
  })

})