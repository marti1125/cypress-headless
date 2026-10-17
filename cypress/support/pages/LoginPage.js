class LoginPage {
  // Selectores: se centralizan aquí.
  get usernameInput() { return cy.get('[data-test="username"]'); }
  get passwordInput() { return cy.get('[data-test="password"]'); }
  get loginButton() { return cy.get('[data-test="login-button"]'); }
  get errorMessage() { return cy.get('[data-test="error"]'); }

  // Acciones
  visit() {
    cy.visit("/");
  }

  fillCreds(username, password) {
    this.usernameInput.clear().type(username);
    this.passwordInput.clear().type(password);
  }

  submit() {
    this.loginButton.click();
  }

  // Flujo completo de inicio de sesión
  login(username, password) {
    this.fillCreds(username, password);
    this.submit();
  }
}

// Se exporta una instancia para no crearla en cada prueba
export const loginPage = new LoginPage();
