import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }
    );
}
handleRegister(){
  this.submitted=true;
  if(this.registerForm.invalid)
  {
    return
  }
  const {firstName,lastName,email,password,confirmPassword}=this.registerForm.value;
  this.userService.userRegister({
    firstName:firstName,
    lastName:lastName,
    email:email,
    password:password,
    confirmPassword:confirmPassword
  }).subscribe((res)=>{if(res.data){
    this.router.navigate(["/login"])
  }})
  console.log(this.registerForm.value)
}
get f() { return this.registerForm.controls; }
}
