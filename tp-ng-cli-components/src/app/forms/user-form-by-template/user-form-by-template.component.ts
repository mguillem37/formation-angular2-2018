import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.css']
})
export class UserFormByTemplateComponent implements OnInit {


  constructor(private usersService: UsersService) {

   }

   public user: User = new User('', '');

  ngOnInit() {
  }

  public register (newUser: User) {
    console.log('New user : ' + newUser.firstname + ' ' + newUser.lastname);
    this.usersService.storeUser(newUser);
  }

  public submit () {
    console.log('New user : ' + this.user);
    this.usersService.storeUser(this.user);
  }
}
