import { Injectable } from '@angular/core';
import { User } from '../models/user';

// cette syntace l'injecte directement au niveau du module principal app.module.ts via la rubrique providers: []
// injectable indique ici que cette classe peut recevoir d'autres injections - FAUX AMI
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users:Array<User> = new Array<User>();


  constructor() { }


  public storeUser = (user:User) => {
    this.users.push(user)
    console.log("User added > " + user.lastname)
  } 

  public removeUser = (user:User) => {
    console.log("User à supprimer : " + user.lastname)
    const index = this.users.findIndex(u=>u.lastname===user.lastname)
    this.users.splice(index, 1)
  }

}
