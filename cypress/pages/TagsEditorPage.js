class TagsEditorPage {
    name = () => cy.get('input[name="name"]')
    slug = () => cy.get('input[name="slug"]')
    color = () => cy.get('input[name="accent-color"]')
    description= () => cy.get('textarea[name="description"]')
    facebookDescription = () => cy.get('textarea[name="ogDescription"]')

    codeEditor = () =>
    cy.get(".CodeMirror-line").then(($selects) => {
      const selected = $selects.get(0);
      return selected;
    });
    
    guardarButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view')
    

  
    ingresarNombre = (nombre) => {
      this.name().type(nombre)
    }

    ingresarSlug = (slug) => {
      this.slug().type(slug)
    }

    ingresarColor = (color) => {
        let myColor=color.replace("#","")
        this.color().type(myColor)
    }

    ingresarDescripcion = (descripcion) => {
        this.description().type(descripcion)
    }
  
   
    guardarTag = () => {
        this.guardarButton().click()
    }

    ingresarDescripcionFacebook = (facebookDescription) => {
      this.facebookDescription().type(facebookDescription)
    }

    ingresarCodeInjectionHeader = (codeInjection) => {
      this.codeEditor().click({ force: true });
      this.codeEditor().type(codeInjection);
    }
  }

export default TagsEditorPage;