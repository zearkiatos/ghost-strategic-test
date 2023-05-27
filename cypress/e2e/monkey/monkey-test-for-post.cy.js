import { faker } from '@faker-js/faker';
import SigninPage from '../../pages/SigninPage'

describe('Monkey test suite for post creation', function() {
    const signinPage = new SigninPage();
    it('Should visit the post module and execute the monkeys 🐒', function() {
        cy.fixture('login-data.json').then(function (user) {
            this.user = user;
            cy.visit(this.user.urlLogin);
          });
         
      
          cy.fixture('login-data.json').then(function (user) {
            signinPage.ingresarCorreoElectronico(this.user.usuario);
    
            signinPage.ingresarPassword(this.user.contraseña);
            signinPage.hacerClicEnIniciarSesion();
            cy.visit('http://localhost:2368/ghost/#/editor/post');
            cy.wait(1000);
            executeRandomEvents(40);
          });

    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function executeRandomEvents (monkeyQuantities) {
 let monkeysLeft = monkeyQuantities;
 if(monkeyQuantities > 0) { 
    let randomEvent = getRandomInt(0, 5);
    events[randomEvent]();
    monkeysLeft-=1;
    executeRandomEvents(monkeysLeft);
 }
}

function randomClickOnLink() {
    cy.get('a').then($links => {
        var randomLink = $links.get(getRandomInt(0, $links.length));
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
        cy.wait(1000);
    });
}

function randomFillATextInput() {
    cy.get('[type="text"]').then($textInput => {
        var randomText = $textInput.get(getRandomInt(0, $textInput.length));
        if(!Cypress.dom.isHidden(randomText)) {
            const countOfLetter = getRandomInt(0, 20)
            cy.wrap(randomText).type(faker.lorem.words(countOfLetter));
        }
        cy.wait(1000);
    });
}

function randomTypeTitle() {
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').then($selects => {
        var randomTitle = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(randomTitle)) {
            cy.get(randomTitle).type(faker.lorem.words(5), {force: true});
        }
        cy.wait(1000);
    });
}

function randomTypeBody() {
    cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content').then($selects => {
        var randomTitle = $selects.get(getRandomInt(0, $selects.length));
        if(!Cypress.dom.isHidden(randomTitle)) {
            cy.get(randomTitle).type(faker.lorem.paragraphs(), {force: true});
        }
        cy.wait(1000);
    });
}

function randomClickButton() {
    cy.get('button').then($buttons => {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
        cy.wait(1000);
    });
}

const events = {
    0: () => randomClickOnLink(),
    1: () => randomFillATextInput(),
    2: () => randomTypeTitle(),
    3: () => randomClickButton(),
    4: () => randomTypeBody()
};