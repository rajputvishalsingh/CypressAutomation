/// <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import ProductPage from "../PageObjects/Productpage";
import KartPage from "../PageObjects/Kartpage";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";
import AddProductsData from "../fixtures/TestData/AddProductsTestData.json";
import DeleteProductsTestData from "../fixtures/TestData/DeleteProductsTestData.json";
describe("Cart total", function () {
  const homepage = new HomePage();
  const productpage = new ProductPage();
  const kartpage = new KartPage();
  it("Get the total amount in cart", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    productpage.selectProduct(AddProductsData.multipleproducts);
    productpage.goToCart();
    kartpage.kartTotal();
  });
  it("Get the total amount in cart", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    productpage.selectProduct(AddProductsData.twoproducts);
    productpage.goToCart();
    kartpage.kartTotal();
    kartpage.deleteProduct(AddProductsData.oneproducts);
    productpage.selectProduct(DeleteProductsTestData.addproduct);
    productpage.goToCart();
    kartpage.kartTotal();
  });
});
