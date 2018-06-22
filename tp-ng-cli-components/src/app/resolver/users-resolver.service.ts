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
      const aUser = new User('matthieu', 'guillemette');
      return aUser;
    }

}
