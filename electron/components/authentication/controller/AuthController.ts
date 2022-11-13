import { ipcMain } from "electron";
import { User } from "../model/user.model";
import { EventNamesConstants } from "../utils/constants/EventsNamesConstants";

export const AuthController = {
  authenticateUser: () => {
    ipcMain.on(EventNamesConstants.LOGIN, (event, data) => {

    })
  },

  getAlgo: () => {
    ipcMain.on('puto', (event, data) => {
      console.log('kajsdfklajsdf')
      console.log(event)
      console.log(data)
      // User.create({name: 'gonzalo'})
    })
  }
}
