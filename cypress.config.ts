import { defineConfig } from "cypress";
import { readPdf } from "./cypress/scripts/readpdf";
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
      on("task", { isFileExist, findFiles });
      on("task", { readPdf });
    },

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    chromeWebSecurity: false,
    env: {
      url: "http://demoblaze.com/index.html",
      url1: "https://reqres.in/",
      url2: "https://saucedemo.com",
      url3: "https://cyberleninka.org",
      url4: "https://demo.automationtesting.in/Windows.html",
      user: "vishal24",
      password: "123456",
    },
    retries: {
      runMode: 1,
    },
    projectId: "nodpcq",
    specPattern: [
      "cypress/integration/*.ts",
      "cypress/integration/additionaltestcases/*.ts",
    ],
  },
});
