import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLog]'
})
export class LogDirective {

  @Input('logText')
  logText:string;

  constructor() { }

}
