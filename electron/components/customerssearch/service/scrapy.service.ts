import puppeteer, { Browser, Page } from "puppeteer";

export class ScrapyService {
  private static instance: ScrapyService;
  private static browser: Browser;
  private static page: Page;

  private constructor () {}

  static getInstance(): ScrapyService {
    if (!ScrapyService.instance) {
      ScrapyService.instance = new ScrapyService()
    }
    return ScrapyService.instance;
  }

  async initBrowser(data: any) {
    try {
      ScrapyService.browser = await puppeteer.launch({
        headless: false,
        args: ["--disable-setuid-sandbox"],
        'ignoreHTTPSErrors': true
      })
      ScrapyService.page = await ScrapyService.browser.newPage()
      await ScrapyService.page.goto('https://www.instagram.com/accounts/login/')
      await ScrapyService.page.waitForSelector('input[name="username"]')
      await ScrapyService.page.type('input[name="username"]', 'marcelo_699_698@hotmail.com', { delay: Math.floor(Math.random() * (800 - 300) + 300) });
      await ScrapyService.page.type('input[name="password"]', '258/456', { delay: Math.floor(Math.random() * (800 - 300) + 300) });
      await ScrapyService.page.click('button[type="submit"]', { delay: Math.floor(Math.random() * (10000 - 3000) + 3000) });
      await ScrapyService.page.waitForSelector('div[role="dialog"]', { timeout: 5000 })
      const [button] = await ScrapyService.page.$x('//button[contains(text(), "Ahora no")]')
      console.log(button);
      if (button) {
        button.click
      }
    } catch(e: any) {
      ScrapyService.browser.close()
      console.log('Soy el error scrapyService', e)
      throw new Error("Error al conectarse")
    }
  }
}