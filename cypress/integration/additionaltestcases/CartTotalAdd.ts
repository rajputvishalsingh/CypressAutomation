/// <reference types = "cypress" />
import CartTotal from "./PageObjects_Addn/CartTotal";
describe("BMS Demo Test Suite", function () {
  const cartTotal = new CartTotal();
  it("Get the total amount in cart", function () {
    var total = 0;
    var subtotal = 0;
    var totalwithtax = 0;
    cartTotal.openPage();
    cartTotal.login();
    cartTotal.addProduct();
    cartTotal.checkout();
    //calculating total cart price and verifying
    cartTotal.verifyCartTotal(total, subtotal, totalwithtax);
  });
});
