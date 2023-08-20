import HomePage from "../PageObjects/Homepage";
import CountItemsLocators from "../fixtures/Locators/CountItemsLocators.json";
class ProductPage {
  homepage = new HomePage();
  selectProduct(products: string[]) {
    products.forEach((product) => {
      this.homepage.gotoHomePage();
      cy.get(CountItemsLocators.productCard).each((element, index, list) => {
        if (element.text().includes(product)) {
          cy.get(CountItemsLocators.productCardName)
            .eq(index)
            .click({ force: true });
        }
      });
      cy.get(CountItemsLocators.addToCart).click();
      cy.wait(2000);
    });
  }

  goToCart() {
    cy.contains(CountItemsLocators.Cartlink).click();
    cy.wait(5000);
  }

  countCategoryItems(count: number) {
    cy.wait(2000);
    cy.get(CountItemsLocators.productCard).then((list) => {
      expect(list.length).to.be.equal(count);
    });
  }
}

export default ProductPage;
