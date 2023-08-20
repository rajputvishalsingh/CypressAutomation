// / <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import GlobalPage from "../PageObjects/Globalpage";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";
describe("Login Cases", function () {
  before(() => {
    user = LoginTestData.validLoginData.user;
    password = LoginTestData.validLoginData.password;
    cy.request("POST", "https://api.demoblaze.com/signup", {
      username: user,
      password: password,
    });
  });
  const homepage = new HomePage();
  const globalpage = new GlobalPage();
  var user: string;
  var password: string;
  it("login without entering details", function () {
    user = LoginTestData.invalidUser.user;
    password = LoginTestData.invalidPassword.password;
    homepage.loginWithoutData();
    globalpage.responseMsg("Please fill out Username and Password.");
  });
  it("login with invalid user", function () {
    user = LoginTestData.invalidUser.user;
    password = LoginTestData.invalidPassword.password;
    homepage.login(user, password);
    globalpage.responseMsg("User does not exist.");
  });
  it("login with invalid password", function () {
    user = LoginTestData.invalidPassword.user;
    password = LoginTestData.invalidPassword.password;
    homepage.login(user, password);
    globalpage.responseMsg("Wrong password.");
  });
  it("login with valid details", function () {
    homepage.login(user, password);
    homepage.verifyLogin(user);
  });
});
