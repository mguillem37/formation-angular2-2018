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
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CoucouComponent } from './component/coucou/coucou.component';
import { CoucouChild1Component } from './component/coucou-child1/coucou-child1.component';
import { CoucoucChild2Component } from './component/coucouc-child2/coucouc-child2.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserrolePipe,
    LogDirective,
    HighlightDirective,
    UserFormByTemplateComponent,
    UserFormByCodeComponent,
    CoucouComponent,
    CoucouChild1Component,
    CoucoucChild2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
