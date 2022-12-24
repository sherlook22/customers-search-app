import { IpcMain } from "electron";
import puppeteer from "puppeteer";

export const ScrapyController = {
  algo: (ipcMain: IpcMain) => {
      ipcMain.on('puto', (event, data) => {
    // let elem = null;
    // (async () => {
    //   const browser = await puppeteer.launch({
    //     headless: false,
    //     args: ["--disable-setuid-sandbox"],
    //     'ignoreHTTPSErrors': true
    //   });
    //   // const context = await browser.createIncognitoBrowserContext()
    //   const page = await browser.newPage()
    //   // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36');
    //   await page.goto('https://www.instagram.com/accounts/login/')
    //   // await page.screenshot({ path: 'gonza.jpg'})
    //   await page.waitForSelector('input[name="username"]')
    //   await page.type('input[name="username"]', 'marcelo_699_698@hotmail.com', { delay: Math.floor(Math.random() * (800 - 300) + 300) });
    //   await page.type('input[name="password"]', '258/456+', { delay: Math.floor(Math.random() * (800 - 300) + 300) });
    //   await page.click('button[type="submit"]', { delay: Math.floor(Math.random() * (10000 - 3000) + 3000) });
    //   console.log("Empezando wait")
    //   await page.waitForSelector('div[role="dialog"]')
    //   console.log("Saliendo wait")
    //   const btnSelector = await page.$x('//button[contains(text(), "Ahora no")]')
    //   console.log(btnSelector)
    //   // btnSelector[0].click()
    //   // await page.click('button[value="Ahora no"]', { delay: Math.floor(Math.random() * (10000 - 3000) + 3000) })
    //   console.log('saliendooooooooooooooooooo')
    // })()
    // console.log('aklsdf')
  })
  }
}
