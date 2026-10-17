class CartPage {

    get goToShoppingCart() { return cy.get('[data-test="shopping-cart-link"]'); }
    get checkoutButton() { return cy.get('[data-test="checkout"]'); }

    goToCart() {
        this.goToShoppingCart.click();
    }

    checkout() {
        this.checkoutButton.click();
    }

}

export default CartPage;