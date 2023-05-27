
import SigninPage from "../../pages/SigninPage";
import { getRandomAccount } from "../../../mock/signin";


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()



  it('Ingresar al sistema correctamente y ver sitio', () => {

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
      

      // Then
      
      cy.get('a[href="#/site/"]').should('be.visible')
      cy.get('iframe[id="site-frame"]').should('be.visible')
      cy.url().should('include', '/site')

     
    }); 
  });

})