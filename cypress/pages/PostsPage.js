class PostsPage {
    
    newPostLink=()=>cy.contains('New post')
    updatePostLink=()=>cy.contains('Welcome to Ghost')

    nuevoPost = () => {
        this.newPostLink().click()
    }
  
    updatePost = () =>{
      this.updatePostLink().click()
    }
   
  }

export default PostsPage;