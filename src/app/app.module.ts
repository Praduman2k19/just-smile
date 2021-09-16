import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './common/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import { JokesComponent } from './component/jokes/jokes.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { CreateJokeComponent } from './component/create-joke/create-joke.component';

// import * as firebase from 'firebase/app'
import  firebase from "firebase/app";
import 'firebase/auth';


// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAhJWDjBIH9e5DeYyl7rd6wPXLd0XENwf4",
  authDomain: "just-smile7.firebaseapp.com",
  projectId: "just-smile7",
  storageBucket: "just-smile7.appspot.com",
  messagingSenderId: "944165249948",
  appId: "1:944165249948:web:0213d634f0aa52ec4e9e59"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AccountComponent,
    LoginComponent,
    SignupComponent,
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    JokesComponent,
    NotificationsComponent,
    CreateJokeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
