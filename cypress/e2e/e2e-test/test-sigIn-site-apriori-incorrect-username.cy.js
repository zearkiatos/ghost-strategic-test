
import SigninPage from "../../pages/SigninPage";
import { getRandomAccount } from "../../../mock/signin";


describe('Escenario iniciar sesión y ver sitio', () => {
  const signinPage = new SigninPage()

  it('Ingreso fallido debido a correo electrónico incorrecto', () => {

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
      signinPage.ingresarCorreoElectronico(incorrectAccount.email);
      
      signinPage.ingresarPassword(this.user.contraseña)
      signinPage.hacerClicEnIniciarSesion()
      

      // Then
      cy.contains('There is no user with that email address').should('exist')
       
      
    }); 
  });

})