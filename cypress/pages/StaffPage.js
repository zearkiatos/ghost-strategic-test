class StaffPage {
    
    sendInvitationButton = () =>cy.get('button.gh-btn.gh-btn-green.gh-btn-icon.ember-view')
    inviteButton=()=>cy.get('button.gh-btn.gh-btn-green')
    emailInput = () => cy.get('input.email.ember-text-field.gh-input.ember-view').first()



    nuevoMiembro = () => {
        this.inviteButton().click()
    }
    ingresarEmail = (email) => {
        this.emailInput().type(email)
    }
    invitar = () => {
        this.sendInvitationButton().click()
    }

  
   
  }

export default StaffPage;