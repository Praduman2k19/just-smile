import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateJokeComponent } from './create-joke/create-joke.component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  id:number=876
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public createJoke(){
    const dialogRef = this.dialog.open(CreateJokeComponent, {
      width: '310px',
      height: '60%',
      position: {
        right: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
}

}
