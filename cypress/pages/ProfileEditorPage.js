class ProfileEditorPage {
    userName = () => cy.get('input[id="user-name"]').scrollIntoView().clear();
    email = ()=> cy.get('input[id="user-email"]').scrollIntoView().clear();
    userSlug = ()=>cy.get('input[id="user-slug"]').scrollIntoView().clear();
    userLocation = () => cy.get('input[id="user-location"]').scrollIntoView().clear()
    user = () => cy.get('input[name="user"]').scrollIntoView().clear()
    userWebsite = () => cy.get('input[id="user-website"]').scrollIntoView().clear();
    userFacebook = () => cy.get('input[name="user[facebook]"]').scrollIntoView().clear()
    userTwitter = () => cy.get('input[name="user[twitter]"]').scrollIntoView().clear()
    userBio = () => cy.get('textarea[id="user-bio"]').scrollIntoView().clear()
    personalToken = () => cy.get('input#personal-token')
    regenerateButton = () => cy.contains('button', 'Regenerate')
    regenerateTokenButton = () => cy.contains('button', 'Regenerate your Personal Token')
    publishButton = () => cy.contains('button', 'Save');
    passwordOld = () => cy.get('[id="user-password-old"]').scrollIntoView().clear()
    passwordNew = () => cy.get('[id="user-password-new"]').scrollIntoView().clear()
    passwordVerify = () => cy.get('[id="user-new-password-verification"]').scrollIntoView().clear()



    addUserName = (userName) => {
        this.userName().type(userName, { force: true });
    }

    addUserSlug = (slug)=>{
        this.userSlug().type(slug, { force: true });
    }

    addUserLocation = (location) => {
        this.userLocation().type(location, { force: true });
    }

    addUser = (user) => {
        this.user().type(user, { force: true });
    }
    
    addEmail = (email) =>{
        this.email().type(email,{force:true});
    }

    addUserWebsite = (website) => {
        this.userWebsite().type(website, { force: true });
    }

    addUserTwitter = (username) => {
        this.userTwitter().type(username, { force: true });
    }

    addUserFacebook = (username) => {
        this.userFacebook().type(username, { force: true });
    }

    addUserBio = (bio) => {
        this.userBio().type(bio, { force: true });
    }

    updateButton = () => {
        this.publishButton().click()
    }

    regenerateBtn = () => {
        this.regenerateButton().click()
    }

    regenerateTokenBtn = () => {
        this.regenerateTokenButton().click()
    }

    addPasswordOld = (oldPassword) => {
        this.passwordOld().type(oldPassword, { force: true });
    }

    addPasswordNew = (newPassword) => {
        this.passwordNew().type(newPassword, { force: true });
    }

    addPasswordVerify = (newPassword) => {
        this.passwordVerify().type(newPassword, { force: true });
    }


}

export default ProfileEditorPage;