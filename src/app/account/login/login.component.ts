import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
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
    this.message="loggin...";
    this.userError=undefined
    console.log(data);
    firebase.auth().signInWithEmailAndPassword(data.email,data.password).then((res)=>{
      console.log(res);
      this.message="You have been logged in successfully.";
      this.deleteMessage()

    },err=>{
      console.log(err);
      this.message="";
      this.userError=err.message
      this.deleteMessage()
    })
  }


  deleteMessage()
  {
    setTimeout(() =>
    {
      this.message=""
      this.userError=undefined
    },2000)
  }

}
