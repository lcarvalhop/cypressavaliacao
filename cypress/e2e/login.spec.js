import LoginPage from '../support/pages/loginPage';

describe('Login Sanity Tests', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.log('Iniciando visita à página de login...');
        LoginPage.visit();
    });

    it('LOGIN_001: should login successfully with valid credentials', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    });

    it('LOGIN_002: should show error for invalid username', () => {
        LoginPage.login('invalid_user', 'secret_sauce');
        LoginPage.verifyErrorMessage('Username and password do not match any user in this service');
    });

    it('LOGIN_003: should show error for empty fields', () => {
        LoginPage.login('', '');
        LoginPage.verifyErrorMessage('Username is required');
    });
});