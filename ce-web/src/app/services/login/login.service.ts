import { Injectable } from "@angular/core";
import { DataStorageService } from "../../services/dataStorage/data-storage.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private user: any;
  private userKey: string = "username";
  constructor(private _dataStorageService: DataStorageService) {}

  loginUser(_userName: string, _password: string) {
    this._dataStorageService.setObjectValue(this.userKey, [
      {
        username: _userName,
        password: _password
      }
    ]);
  }
  isLogged() {
    //debugger;
    const user = this._dataStorageService.getObjectValue(this.userKey);
    if (user != null) {
      if (user.username != "" && user.password != "") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  logOut() {
    if (window.localStorage) {
      localStorage.removeItem(this.userKey);
    }
  }
}
