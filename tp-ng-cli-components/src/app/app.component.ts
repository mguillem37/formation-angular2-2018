import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour Matthieu';

  public onClick = (event:MouseEvent, name:string) => {
    console.log("onClick ! " + name +  " / " + event.clientX + " / " + event.clientY )
  }
}
