class Download {
  stamp = new Date().toISOString();
  openPage() {
    cy.visit(Cypress.env("url3"));
  }
  downloadFile() {
    cy.contains("Basic medicine").click();
    cy.contains(
      "Transplacental transfer of 2-naphthol in human placenta"
    ).click();
    cy.get("#btn-download")
      .invoke("attr", "href")
      .then((href) => {
        var link = Cypress.env("url3") + href;
        cy.log(link);
        cy.downloadFile(link, "cypress/downloads", "demofile.pdf");
      });
  }
  verifyDownloadFile() {
    cy.verifyDownload("demofile.pdf");
    cy.readFile("cypress/downloads/demofile.pdf").should("not.be.empty");
    cy.readFile("cypress/downloads/demofile.pdf").should(
      "contain",
      "Transplacental transfer of 2-naphthol in human"
    );
  }
}
export default Download;
