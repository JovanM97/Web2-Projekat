import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserLoginServiceService } from '../Services/user-login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserType } from '../model/user';
import { HttpHeaderResponse } from '@angular/common/http';
import { LoginModel } from '../model/loginModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserLoginServiceService]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  returnUrl;
  constructor(private service : UserLoginServiceService, private router : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.setForm();
    //this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  setForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
  
    })
  }

  onSubmit() {
    let user = new LoginModel(this.loginForm.value.email, this.loginForm.value.password)
    this.service.SpecifiedUrl="Login/Login";

    this.service.Login(user).subscribe((data) => { 
        
      localStorage.setItem("nettoken",data.token);
      localStorage.setItem("role",data.msg);
      localStorage.setItem("username",data.username);
      localStorage.setItem("email",user.email);
      console.log(data.firstLoggin);
       this.router.navigate(['dashboard'])
       this.service.checkTheRole();
     },
     (error) => {
       console.log(error);
       alert("Email or password incorrect.")
     },
     () => {
       console.log('complete');
    })

  }

}
