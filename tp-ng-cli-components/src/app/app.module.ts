import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserrolePipe } from './userrole.pipe';
import { LogDirective } from './directives/log.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UserFormByTemplateComponent } from './forms/user-form-by-template/user-form-by-template.component';
import { UserFormByCodeComponent } from './forms/user-form-by-code/user-form-by-code.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserrolePipe,
    LogDirective,
    HighlightDirective,
    UserFormByTemplateComponent,
    UserFormByCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
