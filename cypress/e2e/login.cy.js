import { loginPage } from "../support/pages/LoginPage";

describe("Swag Labs - Login Tests", () => {
  beforeEach(() => {
    // Carga los datos del fixture y los guarda en el alias "users"
    cy.fixture("users").as("users");
    loginPage.visit();
  });

  it("TC-01: Login exitoso con usuario estándar", function () {
    // function() en lugar de () => para acceder a this.users
    const user = this.users.standard;
    loginPage.login(user.username, user.password);
    cy.url().should("include", "/inventory.html");
  });

  it("TC-02: Validación de usuario bloqueado", function () {
    const user = this.users.locked;
    loginPage.login(user.username, user.password);
    loginPage.errorMessage
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out.");
  });
});