
import SigninPage from "../../pages/SigninPage";
import { getRandomAccount } from "../../../mock/signin";


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()

  it('Ingreso fallido debido al password incorrecto', () => {

    cy.fixture('login-data.json').then(function (user) {
      this.user = user;
      // Given
      cy.visit(this.user.urlLogin);
      
    });

    //obteniendo una cuenta incorrecta
    const incorrectAccount=getRandomAccount();


    cy.fixture('login-data.json').then(function (user) {
      this.user = user;

      // When
      signinPage.ingresarCorreoElectronico(this.user.usuario);
      
      signinPage.ingresarPassword(incorrectAccount.password)
      signinPage.hacerClicEnIniciarSesion()
      

      // Then
      cy.contains('Your password is incorrect.').should('exist')
       
      
    }); 
  });

})