class API {
  openPage() {
    cy.visit(Cypress.env("url1"));
  }
  callPost() {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    }).then((response) => {
      const body = response.body;
      expect(response.body.name).to.be.equal("morpheus");
    });
  }
  callGet() {
    cy.request("https://reqres.in/api/users/2").then((response) => {
      const body = response.body;
      expect(response.body.data.first_name).include("Janet");
    });
  }
}
export default API;
