import { IpcMain } from "electron";
import { AuthController } from "./authentication/controller/AuthController";
import { ScrapyController } from "./scrapyig/controller/ScrapyController";

export const InitComponents = () => {
  for (let func in AuthController) {
    AuthController[func]()
  }
  // for (let func in ScrapyController) {
  //   ScrapyController[func](ipcMain)
  // }
}
