import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ComponentComponent } from './component/component.component';
import { CreateJokeComponent } from './component/create-joke/create-joke.component';
import { JokesComponent } from './component/jokes/jokes.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { ProfileComponent } from './component/profile/profile.component';
// import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path:'', redirectTo:'component',pathMatch:'full'},
  {path:'account',component:AccountComponent},
  {path:'component',component:ComponentComponent,
  children:[
    {path:'',component:JokesComponent ,pathMatch:'full'},
    {path:'profile/:id',component:ProfileComponent},
    {path:'notifications', component:NotificationsComponent},
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
