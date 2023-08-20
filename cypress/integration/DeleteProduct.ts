/// <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import ProductPage from "../PageObjects/Productpage";
import KartPage from "../PageObjects/Kartpage";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";
import AddProductsData from "../fixtures/TestData/AddProductsTestData.json";
import DeleteProductsTestData from "../fixtures/TestData/DeleteProductsTestData.json";

describe("Delete Product", function () {
  const homepage = new HomePage();
  const productpage = new ProductPage();
  const kartpage = new KartPage();

  it("Add one product and delete product in cart", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    cy.log(AddProductsData.oneproducts[0]);
    productpage.selectProduct(AddProductsData.oneproducts);
    productpage.goToCart();
    kartpage.deleteProduct(DeleteProductsTestData.oneproducts);
  });
  it("Add multiple products and delete two product in cart", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    cy.log(AddProductsData.multipleproducts[0]);
    productpage.selectProduct(AddProductsData.multipleproducts);
    productpage.goToCart();
    kartpage.deleteProduct(DeleteProductsTestData.twoproducts);
  });
  it("Delete product in empty cart", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    productpage.goToCart();
    kartpage.deleteProduct(DeleteProductsTestData.oneproducts);
  });
  it("Add products - delete one product - add another product", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    cy.log(AddProductsData.multipleproducts[0]);
    productpage.selectProduct(AddProductsData.multipleproducts);
    productpage.goToCart();
    kartpage.deleteProduct(DeleteProductsTestData.deleteoneproduct);
    homepage.gotoHomePage();
    productpage.selectProduct(DeleteProductsTestData.addproduct);
    productpage.goToCart();
  });
});
