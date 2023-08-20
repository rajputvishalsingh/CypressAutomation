/// <reference types = "cypress" />
import API from "./PageObjects_Addn/API";
describe("BMS Demo Test Suite", function () {
  const api = new API();
  it("Verify API POST reponse", () => {
    api.openPage();
    api.callPost();
  });
  it("Verify API GET reponse", () => {
    api.openPage();
    api.callGet();
  });
});
