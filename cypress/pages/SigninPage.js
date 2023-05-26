class SigninPage {
    correoElectronico = () => cy.get('input[name="identification"]')
    password = () => cy.get('input[name="password"]')
    botonIniciarSesion = () => cy.get('button[id="ember12"]')
  
    ingresarCorreoElectronico = (email) => {
      this.correoElectronico().type(email)
    }

    ingresarPassword = (pwd) => {
      this.password().type(pwd)
    }
  
    hacerClicEnIniciarSesion = () => {
      this.botonIniciarSesion().click()
    }
  }

export default SigninPage;