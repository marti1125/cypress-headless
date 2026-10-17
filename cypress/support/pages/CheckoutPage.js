class CheckoutPage {
    get firstNameInput() { return cy.get('[data-test="firstName"]'); }
    get lastNameInput() { return cy.get('[data-test="lastName"]'); }
    get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
    get continueButton() { return cy.get('[data-test="continue"]'); }
    get finishButton() { return cy.get('[data-test="finish"]'); }
    get completeMessage() { return cy.get('[data-test="complete-header"]'); }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.postalCodeInput.type(postalCode);
    }

    continue() {
        this.continueButton.click();
    }

    finish() {
        this.finishButton.click();
    }

    getCompleteMessage() {
        return this.completeMessage;
    }
}

export default CheckoutPage;