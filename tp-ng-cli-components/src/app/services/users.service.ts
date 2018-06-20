import { Injectable } from '@angular/core';
import { User } from '../models/user';

// cette syntace l'injecte directement au niveau du module principal app.module.ts via la rubrique providers: []
// injectable indique ici que cette classe peut recevoir d'autres injections - FAUX AMI
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
