const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    "/html/body/div[1]/div/main/div/div/div[5]/ul/li[1]/div/div[1]/a/img"
  );
  const src = await el.getProperty("src");
  const srcTxt = await src.jsonValue.value();

  const [el2] = await page.$x(
    "/html/body/div[1]/div/main/div/div/div[5]/ul/li[1]/div/div[2]/h3/a"
  );
  const txt = await el2.getProperty("textContent");
  const rawTxt = await txt.jsonValue();

  console.log({ srcTxt, rawTxt });

  browser.close();
}

scrapeProduct("https://howlongtobeat.com/?q=");
