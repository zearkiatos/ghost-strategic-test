class MemberPage {

    enableMemberLink=()=>cy.contains('Members')
    activateOption=()=>cy.get('label.checkbox.ember-view')
    saveConfiguration=()=>cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
    newMember=()=>cy.contains('New member')
    name = () => cy.get('input#member-name')
    email = () => cy.get('input#member-email')
    label = () => cy.get('input.ember-power-select-trigger-multiple-input')
    note = () => cy.get('textarea#member-note')
    saveButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')  
    selectMember =()=> cy.get('.gh-list-row.gh-members-list-item')

    habilitarMiembros = () => {
      this.enableMemberLink().click()
    }

    activarOpcionMiembros = () => {
      this.activateOption().click()
    }

    guardarConfigurarion = () => {
      this.saveConfiguration().click()
    }

    nuevoMiembro = () => {
      this.newMember().click()
    }

    seleccionarMiembro = () => {
      this.selectMember().eq(0).click()
    }

    ingresarNombre = (name) => {
      this.name().type(name)
    }

    ingresarEmail = (email) => {
      this.email().type(email)
    }

    ingresarLabel = (label) => {
      this.label().type(label+'{enter}')
    }

    ingresarNota = (note) => {
      this.note().type(note)
    }

    guardarMiembro = () => {
        this.saveButton().click()
    }

    limpiarNombre = () => {
        this.name().clear()
    }

    limpiarEmail = () => {
        this.email().clear()
    }
}

export default MemberPage;