import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {


  @Input() anUser: User;
  @Input() anIndex: number;

  @Output('userSelected')
  userSelected: EventEmitter<User> = new EventEmitter<User>();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    console.log('On Init');
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }

  public pick(anUser: User) {
    this.userSelected.emit(anUser);
  }



}
