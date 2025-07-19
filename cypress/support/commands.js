Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/', { timeout: 30000 });
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('body').should('be.visible');
    cy.get('#user-name', { timeout: 10000 }).should('be.visible').type(username);
    cy.get('#password', { timeout: 10000 }).type(password);
    cy.get('#login-button', { timeout: 10000 }).click();
    cy.url().should('include', '/inventory.html');
});