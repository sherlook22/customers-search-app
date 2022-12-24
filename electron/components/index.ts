import { AuthController } from "./authentication/controller/AuthController";
import { CustomersSearchController } from "./customerssearch/controllers/customers-serch.controller";

export const InitComponents = () => {
  for (let func in AuthController) {
    AuthController[func]()
  }

  for (let func in CustomersSearchController) {
    CustomersSearchController[func]()
  }
  // for (let func in ScrapyController) {
  //   ScrapyController[func](ipcMain)
  // }
}
