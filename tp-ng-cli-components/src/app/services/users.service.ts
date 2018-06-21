import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// cette syntace l'injecte directement au niveau du module principal app.module.ts via la rubrique providers: []
// injectable indique ici que cette classe peut recevoir d'autres injections - FAUX AMI
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: Array<User> = new Array<User>();


  constructor(private http: Http) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .map( r => r.json() )
      .subscribe( (res) => {
          // récupération d'une collection d'objets JSON
          console.log(res);
          res.map(u => {
            this.storeUser(new User(u.name.split(' ')[0], u.name.split(' ')[1]))
          });
      });
  }


  public clear = () => {
    this.users.length = 0;
  }

  public storeUser = (user: User) => {
    this.users.push(user);
    console.log('User added > ' + user.lastname);
  }

  public removeUser = (user: User) => {
    console.log('User à supprimer : ' + user.lastname);
    const index = this.users.findIndex(u => u.lastname === user.lastname && u.firstname === user.firstname);
    this.users.splice(index, 1);
  }

}
