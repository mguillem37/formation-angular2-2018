import { Injectable } from '@angular/core';
import { User } from '../models/user';

// cette syntace l'injecte directement au niveau du module principal
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:Array<User> = new Array<User>();


  constructor() { }


  public storeUser = (user:User) => {
    this.users.push(user)
    console.log("User added > " + user.lastname)
  } 

}
