declare namespace Cypress {
  interface Chainable {
    login(user: string, password: string): Chainable<JQuery<HTMLElement>>;
  }
  interface Chainable {
    clearCart(): Chainable<JQuery<HTMLElement>>;
  }
  interface Chainable {
    responseMsg(expectedMsg: string): Chainable<JQuery<HTMLElement>>;
  }
}
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
