class PagesPage {
    
    newPageLink=()=>cy.contains('New page')
    pageList=()=>cy.get('a.ember-view.permalink.gh-list-data.gh-post-list-featured')
      
    nuevaPagina = () => {
        this.newPageLink().click()
    }
    
    modificarPagina =()=>{
      this.pageList().eq(0).click()
    }
   
  }

export default PagesPage;