import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() anUser:User
  @Input() anIndex:number

  @Output('userSelected')
  selectUserEvent: EventEmitter<User> = new EventEmitter<User>()

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }

  public pick(anUser:User) {
    this.selectUserEvent.emit(anUser)
  }



}
