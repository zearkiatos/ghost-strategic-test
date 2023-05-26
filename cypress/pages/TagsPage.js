class TagsPage {
    
    newTagLink=()=>cy.contains('New tag')
    tagName=()=>cy.contains('Getting Started')
    enableFacebookSection=()=>cy.get('button.gh-btn')
    enableCodeInjectionSection=()=>cy.get('button.gh-btn')

    nuevoTag = () => {
      this.newTagLink().click()
    }

    editarTag = () => {
      this.tagName().click()
    }
    
    habilitarFacebook = () => {
      this.enableFacebookSection().eq(3).click()
    }

    habilitarCodeInjection = () => {
      this.enableCodeInjectionSection().eq(4).click()
    }
  }

export default TagsPage;