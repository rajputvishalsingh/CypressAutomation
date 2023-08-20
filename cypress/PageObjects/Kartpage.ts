//import { resolve } from "cypress/types/bluebird";
import addproductslocator from "../fixtures/Locators/AddProductsLocators.json";
import CartTotalLocators from "../fixtures/Locators/CartTotalLocators.json";
interface Details {
  name: string;
  country: string;
  city: string;
  card: string;
  month: string;
  year: string;
}
class KartPage {
  placeOrder(Details: Details) {
    cy.contains(CartTotalLocators.placeOrder).click();
    cy.wait(3000);
    if (Details.name === "") {
      cy.contains("Purchase")
        .click()
        .then(() => {
          cy.on("window:alert", (actualMsg) => {
            expect(actualMsg).to.be.equal(
              "Please fill out Name and Creditcard."
            );
          });
        });
    } else {
      cy.get(addproductslocator.form)
        .find(addproductslocator.name)
        .type(Details.name);
      cy.get(addproductslocator.form)
        .find(addproductslocator.country)
        .type(Details.country);
      cy.get(addproductslocator.form)
        .find(addproductslocator.city)
        .type(Details.city);
      cy.get(addproductslocator.form)
        .find(addproductslocator.card)
        .type(Details.card);
      cy.get(addproductslocator.form)
        .find(addproductslocator.month)
        .type(Details.month);
      cy.get(addproductslocator.form)
        .find(addproductslocator.year)
        .type(Details.year);
      cy.contains("Purchase").click();
      cy.contains("Thank you").should(
        "have.text",
        "Thank you for your purchase!"
      );
    }
  }
  kartTotal() {
    var totalamount = 0;
    var total = 0;
    cy.wait(6000);
    cy.get(CartTotalLocators.productPrice).each((element, index, list) => {
      const productPrice = parseInt(element.text());
      total += productPrice;
    });
    cy.get(CartTotalLocators.GrandTotal).then((amount) => {
      totalamount = parseInt(amount.text());
      expect(totalamount).to.equal(total);
    });
  }
  deleteProduct(products: string[]) {
    cy.get(CartTotalLocators.productNameInCart).each((element, index, list) => {
      products.forEach((product) => {
        if (element.text().includes(product)) {
          cy.get(CartTotalLocators.deleteInCart).eq(index).click();
        }
      });
    });
  }
  verifyCartItemsCount(count: number) {
    cy.get("td:nth-child(2)").then((element) => {
      expect(element.length).to.be.equal(count);
    });
  }
}
export default KartPage;
