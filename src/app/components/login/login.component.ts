import { Component, OnInit } from "@angular/core";

import { CommonService } from "../../core/services/common.service";
import { setTestabilityGetter } from "@angular/core/src/testability/testability";
import { Router } from "@angular/router";
import {
  Params_Authenticate,
  Proxy,
} from "../../core/services/proxy.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading = false;
  model: Params_Authenticate = new Params_Authenticate();

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private router: Router,
    private translate: TranslateService
  ) {
    // this.model = {};
    // this.model.USERNAME = "";
    // this.model.PASSWORD = "";
  }

  ngOnInit() {}
//   login() {
    
//     this.proxy.Authenticate(this.model).subscribe(result=>{
//       this.loading = false;
//       this.CmSvc.Is_Logged_In.next(true);
//       this.router.navigate(["/menu"]);
//       // this.CmSvc.ShowMessage("Login Successfull");
//     if (!result) {
//       this.CmSvc.ShowMessage("Login Successfull");
//     }
//     else{
//       this.CmSvc.ShowMessage("Invalid User and/or password");
//     }
//   });  
//   }

login() {
  this.proxy.Authenticate(this.model).subscribe(result => {
    console.log(result);
    this.loading = false;
    this.CmSvc.ShowMessage("Welcome");
    if(!result){
      this.CmSvc.ShowMessage("Invalid username or password!!")
    }else{
      this.CmSvc.Is_Logged_In.next(true);
      this.router.navigate(["/menu"]);
    }
  })


}
 }
