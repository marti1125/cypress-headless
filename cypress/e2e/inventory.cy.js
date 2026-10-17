import { loginPage } from "../support/pages/LoginPage";

describe("Swag Labs - Inventory Tests", () => {
  beforeEach(() => {
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  // Esta prueba pasa
  it("Debe mostrar la lista de productos", function () {
    loginPage.login(this.users.standard.username, this.users.standard.password);
    cy.get(".inventory_list").should("be.visible");
  });

  // Esta prueba falla intencionalmente
  /*it("Debe encontrar un iPhone 15 (fallo esperado)", function () {
    loginPage.login(this.users.standard.username, this.users.standard.password);
    // El elemento no existe: Cypress lo busca durante 4 segundos y falla
    cy.contains(".inventory_item_name", "iPhone 15 Pro Max").should("be.visible");
  });*/ 
});