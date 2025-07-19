class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('[data-test="error"]'),
    };

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        if (username) this.elements.usernameInput().type(username);
        if (password) this.elements.passwordInput().type(password);
        this.elements.loginButton().click();
    }

    verifyErrorMessage(message) {
        this.elements.errorMessage().should('contain.text', message);
    }
}

export default new LoginPage();