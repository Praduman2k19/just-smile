import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as firebase from 'firebase/app'
import  firebase from "firebase/app";
import 'firebase/auth'

import 'firebase/firestore'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup=new FormGroup({})
  message:string="";
  userError:any;

  constructor(private formBuilder:FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm()
  {
    this.signupForm=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  signup(data:any)
  {
    console.log(data);
    this.message="signed up..."
    this.userError=undefined
    firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then((res:any)=>{
      console.log(res);
       let randomNumber=Math.floor(Math.random()*6)
      res.user?.updateProfile({
        displayName:data.firstName+" "+data.lastName,
        photoURL:'../../../assets/face/boy-pack'+randomNumber+'.png',
      }).then(()=>{
        this.message="signed up successfully."
        this.deleteMessage()
      })
    },(err:any)=>{
      console.log(err);
      this.message="";
      this.userError=err.message;
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
