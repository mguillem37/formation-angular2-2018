import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User> {

  constructor(private usersService: UsersService) {
  }

    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
      // extraction du paramètre iduser de la route
      const idUser = route.paramMap.get('iduser');
      console.log(`idUser : ${idUser}`);
      let aUser;
      switch (idUser)  {
        case '1': {
          aUser = new User('Matthieu', 'Guillemette');
          break;
        }
        case '2': {
          aUser = new User('Martin', 'Guillemette');
          break;
        }
      }
      return aUser;
    }

}
