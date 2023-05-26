class PageEditorPage {
    titulo = () => cy.get('textarea.gh-editor-title.ember-text-area.gh-input.ember-view')
    cuerpo = () => cy.get('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view')
    publishMenu=()=>cy.contains('Publish')
    publishButton = () => cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view')
    settingsButton = () => cy.get('button.post-settings')
    listTagsButton= () => cy.get('div.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger--in-place.ember-power-select-trigger.ember-power-select-multiple-trigger').first()
    updateButton  = () => cy.contains('Update')

    addFeatureButton = () =>
    cy.get("button.koenig-plus-menu-button.flex.justify-center.items-center.relative.w9.h9.ba.b--midlightgrey-l2.bg-white.br-100.anim-normal").then(($selects) => {
      let selected = $selects.get();
      return selected;
    });

    addDividerButton = () =>
    cy.get("div.flex.flex-shrink-0.items-center.middarkgrey.ba.b--transparent.hover-darkgrey.kg-cardmenu-card-hover.pl4.pr4.pt2.pb2.anim-fast").eq(4);
    

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

    abrirSettings = () => {
      this.settingsButton().click()
    }

    abrirListaTags = () => {
      this.listTagsButton().click()
    }

    actualizarPagina = () => {
        this.updateButton().click()
    }

    confirmarActualizacion = () => {
        this.publishButton().click()
    }    

    clickOnAddFeatureButton = () => {
      this.addFeatureButton().click();
    };

    clickOnAddDivider = () => {
      this.addDividerButton().click();
    };
  }

export default PageEditorPage;