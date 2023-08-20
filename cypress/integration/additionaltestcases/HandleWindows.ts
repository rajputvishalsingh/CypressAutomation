/// <reference types = "cypress" />
import Window from "./PageObjects_Addn/Window";
describe("BMS Demo Test Suite", function () {
  const window = new Window();
  it("Handle new window", () => {
    window.openPage();
    window.openNewTab();
    window.verifyNewTab();
  });
});
