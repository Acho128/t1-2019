import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "../../services/login/login.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  private formBuilder: FormBuilder;
  constructor(private _loginService: LoginService, private _router: Router) {
    //this.loginService = new LoginService();
    this.formBuilder = new FormBuilder();
    this.iniciarLogin();
  }

  ngOnInit() {}

  iniciarLogin = () => {
    this.formGroup = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  };

  iniciarSesion() {
    //debugger;
    this._loginService.loginUser(
      this.formGroup.value.username,
      this.formGroup.value.password
    );
    //console.log(this.checkLog());
    if (this.checkLog()) {
      this._router.navigate(["private/noticias-list"]);
    }
  }
  iniciarSesionFace() {
    this._router.navigate(["private/noticias-list"]);
  }

  checkLog() {
    return this._loginService.isLogged();
  }
  logOut() {
    this._loginService.logOut();
  }
}
