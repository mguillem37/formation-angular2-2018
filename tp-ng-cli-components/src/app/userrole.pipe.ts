import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
  name: 'userrole'
})
export class UserrolePipe implements PipeTransform {

  transform(users: Array<User> , filtername?:string): Array<User> {

      console.log("Filtername : " + filtername.toLowerCase())
      if (!filtername || filtername == '') {
        return users
      }
      return users.filter(u => u.firstname.toLowerCase() === filtername.toLowerCase())

  }

}
