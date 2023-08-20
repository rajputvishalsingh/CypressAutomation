class GlobalPage {
  responseMsg(expectedMSg: string) {
    cy.on("window:alert", (actualMsg) => {
      expect(actualMsg).to.be.equal(expectedMSg);
    });
  }
}
export default GlobalPage;
