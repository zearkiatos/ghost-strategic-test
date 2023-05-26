class ProfilePage {
    titulo = () => cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view')
    cuerpo = () => cy.get('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view')
    publishMenu=()=>cy.contains('Publish')
    publishButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    

  
    ingresarTitulo = (titulo) => {
      this.titulo().type(titulo)
    }

    ingresarCuerpo = (body) => {
      this.cuerpo().type(body)
    }
  
    menuPublicar = () => {
      this.publishMenu().click()
    }
    publicarPagina = () => {
        this.publishButton().click()
    }

    
  }

export default ProfilePage;