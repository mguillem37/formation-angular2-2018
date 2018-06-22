import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.css']
})
export class UserFormByCodeComponent implements OnInit {

  userForm: FormGroup;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;

  static isFirstnameMatthieu = (control: FormControl) => {
    return control.value === 'matthieu' ? null : { notMatthieu : true};
  }
  constructor(private usersService: UsersService, fb: FormBuilder) {

    this.firstnameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(3),
      UserFormByCodeComponent.isFirstnameMatthieu
    ]);

    this.lastnameCtrl = fb.control('');

    this.userForm = fb.group({
        firstname: this.firstnameCtrl,
        lastname: this.lastnameCtrl
    });

  }

  ngOnInit() {
  }

  reset(event: Event) {
    event.stopPropagation();
    this.firstnameCtrl.setValue('');
    this.lastnameCtrl.setValue('');
  }

  submit(event: Event) {
    this.usersService.storeUser(new User(this.firstnameCtrl.value, this.lastnameCtrl.value));
    console.log(this.userForm.value);
  }

}
