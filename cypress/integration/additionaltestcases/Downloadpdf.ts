/// <reference types = "cypress" />
/// <reference types = "cypress-downloadfile" />
/// <reference types = "cy-verify-downloads" />
import Download from "./PageObjects_Addn/Download";

describe("BMS Demo Test Suite", function () {
  const download = new Download();
  it("Download PDF and read content", () => {
    download.openPage();
    download.downloadFile();
    download.verifyDownloadFile();
  });
});
