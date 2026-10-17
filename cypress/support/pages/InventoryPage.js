class InventoryPage {
    
    get addToCartButton() { return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'); }

    addToCart() {
        this.addToCartButton.click();
    }

}

export default InventoryPage;