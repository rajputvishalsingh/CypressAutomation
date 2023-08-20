/// <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import GlobalPage from "../PageObjects/Globalpage";
import SignupTestData from "../fixtures/TestData/SignupTestData.json";
describe("SignUp Cases", function () {
  const homepage = new HomePage();
  const globalpage = new GlobalPage();
  var user: string = "";
  var password: string = "";
  it("Sigup without entering details", function () {
    homepage.signup(user, password);
    globalpage.responseMsg("Please fill out Username and Password.");
  });
  it("Sigup without entering password", function () {
    user = SignupTestData.noPassword.user;
    homepage.signup(user, password);
    globalpage.responseMsg("Please fill out Username and Password.");
  });
  it("Sigup without entering user", function () {
    user = SignupTestData.noUser.password;
    homepage.signup(user, password);
    globalpage.responseMsg("Please fill out Username and Password.");
  });
});
