import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string=""
  userError:any
  loginForm:FormGroup=new FormGroup({})
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm()
  {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  login(data:any)
  {
    console.log(data);
  }

}
