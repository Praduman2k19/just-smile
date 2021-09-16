import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.scss']
})
export class CreateJokeComponent implements OnInit {

  jokeForm:FormGroup=new FormGroup({});
  JokeTypes:any=[{type:"Santa Banta"},{type:"Motu Patlu"},{type:"Tarak Mehta ka Ualta Chasma"},{type:"Corona"},{type:"Cricket"},{type:"Engineering"},];

  constructor(private formBuilder:FormBuilder) {
    this.createJokeForm();
   }

  ngOnInit(): void {
  }
  createJokeForm()
  {
    this.jokeForm=this.formBuilder.group({
      heading:[''],
      body1:['',[Validators.required,Validators.minLength(20)]],
      body2:[''],
      type:['']
    })
  }

  postJoke(data:any)
  {
    console.log(data)
  }

}
