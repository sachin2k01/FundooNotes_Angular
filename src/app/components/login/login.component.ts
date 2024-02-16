import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService) { }
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
  }).subscribe(result=>console.log(result),error=>console.log(error))

  console.log(this.loginForm.value)

}
get f() { return this.loginForm.controls; }
}
