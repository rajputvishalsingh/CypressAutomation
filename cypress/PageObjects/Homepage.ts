import LoginTestData from "../fixtures/TestData/LoginTestData.json";
import SignupLocators from "../fixtures/Locators/SignupLocators.json";
import LoginLocators from "../fixtures/Locators/LoginLocators.json";
import CountItemsLocators from "../fixtures/Locators/CountItemsLocators.json";
class HomePage {
  login(user: string, password: string) {
    return cy.login(user, password);
  }
  loginWithoutData() {
    cy.visit(Cypress.env("url"));
    cy.get(LoginLocators.loginLink).click();
    cy.wait(2000);
    cy.get(LoginLocators.loginButton).click();
  }
  goToCategory(category: string) {
    cy.contains(category).click({ force: true });
    cy.wait(3000);
  }
  verifyLogin(user: string) {
    cy.get(LoginLocators.loginUser).then((element) => {
      cy.log(element.text());
      expect(element.text()).to.be.equal("Welcome " + user);
    });
  }
  gotoHomePage() {
    return cy.contains(LoginLocators.homeLink).click();
  }

  signup(user: string, password: string) {
    cy.visit(Cypress.env("url"));
    cy.get(SignupLocators.signup).click();
    if (user !== "") {
      cy.get(SignupLocators.signUpName).type(user);
    }
    if (password !== "") {
      cy.get(SignupLocators.signUpPassword).type(password);
    }
    cy.get(SignupLocators.signUpButton).click();
  }

  verifyCount(count: number) {
    cy.get(CountItemsLocators.productCard).then((element) => {
      expect(element.length).to.be.equal(count);
    });
  }
}

export default HomePage;
