import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private usersService:UsersService) { }

  ngOnInit() {
  }



}
