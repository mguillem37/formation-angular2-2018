import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
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
import { CoucouModule } from './modules/coucou/coucou.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';




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
    RouterModule.forRoot(ROUTES),
    CoucouModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}


// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');
