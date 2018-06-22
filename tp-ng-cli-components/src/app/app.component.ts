import { Component, Inject, LOCALE_ID } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bonjour Matthieu';
  private username = 'Matthieu';

  // private users: object[] =[]
  // private users:new Array<User>()
  public users;
  public firstnameValueFilter = '';

  constructor(@Inject(LOCALE_ID) public locale: string, private usersService: UsersService) {
    this.users = this.usersService.users;
    console.log(`Locale utilisée : ${locale}`);
  }

  public onClick = (event: MouseEvent, name: string) => {
    console.log('onClick ! ' + name +  ' / ' + event.clientX + ' / ' + event.clientY);
  }

  public addUser = (firstname: string, lastname: string) => {
    // this.users.push({"firstname": firstname, "lastname": lastname})
    this.usersService.storeUser(new User(lastname, firstname));
    // console.log(this.users)
  }

  public setFilter = (filterValue: string) => {
    this.firstnameValueFilter = filterValue;
  }

  public clearUsers = () => {
    this.usersService.clear();
  }

  public deleteUser = (anUser: User) => {
    this.usersService.removeUser(anUser);
  }
}
