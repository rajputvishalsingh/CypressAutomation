class CartTotal {
  openPage() {
    cy.visit(Cypress.env("url2"));
  }
  login() {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  }
  addProduct() {
    cy.get(".btn_inventory").each((element, index, list) => {
      cy.wrap(element).click();
    });
  }
  checkout() {
    cy.get(".shopping_cart_link").click();
    cy.get(".checkout_button").click();
    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Harvey");
    cy.get("#postal-code").type("111111");
    cy.get("#continue").click();
  }
  verifyCartTotal(total: number, subtotal: number, totalwithtax: number) {
    cy.get(".inventory_item_price").each((item, index, list) => {
      var itemprice = item.text();
      itemprice = itemprice.slice(1, itemprice.length);
      total += Number(itemprice);
    });
    cy.get(".summary_subtotal_label").then((element) => {
      var subtotal_string = element.text();
      const subtotal_list = subtotal_string.split("$");
      subtotal = Number(subtotal_list[1]);
      expect(Number(total)).to.be.equal(Number(subtotal));
    });
    cy.get(".summary_tax_label").then((element) => {
      var tax_string = element.text();
      const tax_list = tax_string.split("$");
      totalwithtax = Number(tax_list[1]) + Number(total);
    });
    cy.get(".summary_total_label").then((element) => {
      var finaltotal_string = element.text();
      const finaltotal_list = finaltotal_string.split("$");
      expect(totalwithtax).to.be.equal(Number(finaltotal_list[1]));
    });
  }
}
export default CartTotal;
