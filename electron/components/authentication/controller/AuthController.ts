import { ipcMain } from "electron";
import { ScrapyService } from "../../customerssearch/service/scrapy.service";
import { User } from "../model/user.model";
import { EventNamesConstants } from "../utils/constants/EventsNamesConstants";

export const AuthController = {
  authenticateUser: () => {
    ipcMain.handle(EventNamesConstants.LOGIN, async (event, data) => {
      console.log(data)
      // const scrapyService = ScrapyService.getInstance()
      // await scrapyService.initBrowser(data)
      await User.create(data)
      
    })
  }
}
