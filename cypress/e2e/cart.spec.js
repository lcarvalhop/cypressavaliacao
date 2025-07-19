import loginPage from '../support/pages/loginPage';
import InventoryPage from '../support/pages/inventoryPage';

describe('Post-Login Functionality Tests', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
    });

    it('COMPRA_001: should add an item to the cart', () => {
        const itemName = 'Sauce Labs Backpack';
        InventoryPage.addItemToCart(itemName);
        InventoryPage.verifyCartBadge('1');
        InventoryPage.verifyRemoveButton(itemName);
    });
});