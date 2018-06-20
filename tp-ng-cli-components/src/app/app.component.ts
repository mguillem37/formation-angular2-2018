import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour Matthieu';
  private username: string = 'Matthieu'
  private users: object[] =[]
  // private users:new Array<User>()

  constructor(private usersService:UsersService) {
  }
  
  public onClick = (event:MouseEvent, name:string) => {
    console.log("onClick ! " + name +  " / " + event.clientX + " / " + event.clientY )
  }

  public addUser = (lastname:string, firstname:string) => {
    this.users.push({"firstname": firstname, "lastname": lastname})
    this.usersService.storeUser(new User(lastname, firstname))
    console.log(this.users)
  } 
}
