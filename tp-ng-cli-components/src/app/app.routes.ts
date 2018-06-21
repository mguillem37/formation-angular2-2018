import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormByCodeComponent } from './forms/user-form-by-code/user-form-by-code.component';
import { CoucouComponent } from './component/coucou/coucou.component';


export const ROUTES: Routes = [
    {path: '', component: UserFormByCodeComponent},
    {path: 'coucou', component: CoucouComponent}
];

