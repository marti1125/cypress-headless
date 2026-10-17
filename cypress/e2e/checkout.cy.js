import { loginPage } from "../support/pages/LoginPage";
import InventoryPage from "../support/pages/InventoryPage";
import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe("Swag Labs - Checkout Tests", () => {
  beforeEach(() => {
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  it("Debe completar el proceso de checkout", function () {
    loginPage.login(this.users.standard.username, this.users.standard.password);
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    inventoryPage.addToCart();
    cartPage.goToCart();
    cartPage.checkout();
    checkoutPage.fillCheckoutForm("John", "Doe", "12345");
    checkoutPage.continue();
    checkoutPage.finish();
    checkoutPage.getCompleteMessage().should("be.visible");
  });
  
});