import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coucouc-child2',
  templateUrl: './coucouc-child2.component.html',
  styleUrls: ['./coucouc-child2.component.css']
})
export class CoucoucChild2Component implements OnInit {

  myUser: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      // myUser est un resolver défini dans app.routes.ts
      // this.myUser = this.route.snapshot.data['myUser'];
      this.route.data.subscribe(data => this.myUser = data['myUser']);
  }

}
