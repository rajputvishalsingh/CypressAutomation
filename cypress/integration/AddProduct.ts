/// <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import ProductPage from "../PageObjects/Productpage";
import KartPage from "../PageObjects/Kartpage";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";
import AddProductsData from "../fixtures/TestData/AddProductsTestData.json";
import GlobalPage from "../PageObjects/Globalpage";

describe("Add Product", function () {
  const homepage = new HomePage();
  const productpage = new ProductPage();
  const globalpage = new GlobalPage();
  const kartpage = new KartPage();
  beforeEach(() => {
    cy.clearCart();
  });
  it("Add one Product", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    cy.log(AddProductsData.oneproducts[0]);
    productpage.selectProduct(AddProductsData.oneproducts);
    productpage.goToCart();
    kartpage.placeOrder(AddProductsData.formDetails);
  });
  it("Add two Product", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    productpage.selectProduct(AddProductsData.twoproducts);
    productpage.goToCart();
    kartpage.placeOrder(AddProductsData.formDetails);
  });
  it("Add Product and submit empty form", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    productpage.selectProduct(AddProductsData.oneproducts);
    productpage.goToCart();
    kartpage.placeOrder(AddProductsData.EmptyformDetails);
  });
  it("Add product to cart and verify alert message", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    cy.log(AddProductsData.oneproducts[0]);
    productpage.selectProduct(AddProductsData.oneproducts);
    globalpage.responseMsg("Product added.");
  });
});
