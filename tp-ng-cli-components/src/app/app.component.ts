import { Component } from '@angular/core';

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

  
  public onClick = (event:MouseEvent, name:string) => {
    console.log("onClick ! " + name +  " / " + event.clientX + " / " + event.clientY )
  }

  public addUser = (lastname:string, firstname:string) => {
    this.users.push({"firstname": firstname, "lastname": lastname})
    console.log(this.users)
  } 
}
