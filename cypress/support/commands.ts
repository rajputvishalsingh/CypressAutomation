// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import cypress from "cypress";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (user, password) => {
  cy.visit(Cypress.env("url"));
  cy.get("#login2").click();
  cy.wait(2000);
  cy.get("#loginusername").type(user);
  cy.wait(2000);
  cy.get("#loginpassword").type(password);
  cy.wait(2000);
  cy.get("button[onclick='logIn()']").click();
  cy.wait(5000);
});
require("cypress-downloadfile/lib/downloadFileCommand");
require("cy-verify-downloads").addCustomCommand();
Cypress.Commands.add("clearCart", () => {
  cy.request("POST", "https://api.demoblaze.com/login", {
    username: LoginTestData.user,
    password: "MTIzNDU2",
  }).then((Response) => {
    cy.log(Response.body);
    var res = Response.body.split(" ");
    let resArray: string = res[1];
    cy.request("POST", "https://api.demoblaze.com/viewcart", {
      cookie: resArray,
      flag: true,
    }).then((response) => {
      cy.log(response.body.Items);
      response.body.Items.forEach((item) => {
        cy.request("POST", "https://api.demoblaze.com/deleteitem", item);
      });
      cy.log(response.body.Items.toString());
    });
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
