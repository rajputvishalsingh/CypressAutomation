describe("Session Token", () => {
  it("Get session token", () => {
    cy.session("Vishal24", () => {
      cy.request("POST", "https://api.demoblaze.com/login", {
        username: "Vishal24",
        password: "MTIzNDU2",
      }).then((Response) => {
        cy.log(Response.body);
      });
    });
  });
});
