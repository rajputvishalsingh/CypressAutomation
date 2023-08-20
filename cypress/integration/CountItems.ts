/// <reference types = "cypress" />
import HomePage from "../PageObjects/Homepage";
import ProductPage from "../PageObjects/Productpage";
import KartPage from "../PageObjects/Kartpage";
import LoginTestData from "../fixtures/TestData/LoginTestData.json";
import AddProductsData from "../fixtures/TestData/AddProductsTestData.json";
import CountItemsTestData from "../fixtures/TestData/CountItemsTestData.json";
import GlobalPage from "../PageObjects/Globalpage";

describe("Count Items", function () {
  const homepage = new HomePage();
  const productpage = new ProductPage();
  const kartpage = new KartPage();
  const globalpage = new GlobalPage();
  var itemsName: string[] = Object.keys(CountItemsTestData.itemsInCategory);
  var itemscount: number[] = Object.values(CountItemsTestData.itemsInCategory);
  it("Items count in category on homepage", function () {
    homepage.login(LoginTestData.user, LoginTestData.password);
    homepage.goToCategory(itemsName[0]);
    homepage.verifyCount(itemscount[0]);
  });
  it("items count in cart", () => {
    homepage.login(LoginTestData.user, LoginTestData.password);
    //globalpage.setCart();
    productpage.selectProduct(AddProductsData.multipleproducts);
    productpage.goToCart();
    kartpage.verifyCartItemsCount(AddProductsData.multipleproducts.length);
  });
});
