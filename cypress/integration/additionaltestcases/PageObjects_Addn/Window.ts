class Window {
  openPage() {
    cy.visit(Cypress.env("url4"));
  }
  openNewTab() {
    cy.get("#Tabbed > a").invoke("removeAttr", "target").click();
    cy.get(".selenium-button-container > a.selenium-webdriver").click({
      force: true,
    });
  }
  verifyNewTab() {
    cy.get("div.td-content > div.lead").then((element) => {
      expect(element.text()).to.be.equal(
        "WebDriver drives a browser natively, learn more about it."
      );
    });
  }
}
export default Window;
