import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    }
    );
}

handleLogin(){
  this.submitted=true;
  if(this.loginForm.invalid)
  {
    return
  }
  const {email,password}=this.loginForm.value;
  this.userService.userLogin({
    email:email,
    password:password
  }).subscribe((result:any)=>{
    localStorage.setItem("AuthToken",result.data)
    this.router.navigate(["/dashboard/notes"]
  )},
  error=>console.log(error))
  console.log(this.loginForm.value)

}
get formValidation() { return this.loginForm.controls; }
}
