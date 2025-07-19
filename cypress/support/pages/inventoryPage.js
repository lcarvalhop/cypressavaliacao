class InventoryPage {
    elements = {
        productName: (name) => cy.contains('.inventory_item_name', name),
        addToCartButton: (name) => cy.contains('.inventory_item_name', name).parents('.inventory_item').find('.btn_inventory'),
        cartBadge: () => cy.get('.shopping_cart_badge'),
    };

    addItemToCart(itemName) {
        this.elements.addToCartButton(itemName).click();
    }

    verifyCartBadge(count) {
        this.elements.cartBadge().should('have.text', count);
    }

    verifyRemoveButton(itemName) {
        this.elements.addToCartButton(itemName).should('have.text', 'Remove');
    }
}

export default new InventoryPage();