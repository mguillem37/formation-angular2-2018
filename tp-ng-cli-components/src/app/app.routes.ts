import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormByCodeComponent } from './forms/user-form-by-code/user-form-by-code.component';
import { CoucouComponent } from './component/coucou/coucou.component';
import { CoucouChild1Component } from './component/coucou-child1/coucou-child1.component';
import { CoucoucChild2Component } from './component/coucouc-child2/coucouc-child2.component';
import { LoggedGuardGuard } from './guard/logged-guard.guard';
import { UsersResolverService } from './resolver/users-resolver.service';


export const ROUTES: Routes = [
    {path: '', component: UserFormByCodeComponent},
    {path: 'coucou',
        component: CoucouComponent,
        children: [
            {path: 'child1', component: CoucouChild1Component},
            // tslint:disable-next-line:max-line-length
            {path: 'child2/:iduser', component: CoucoucChild2Component, canActivate: [LoggedGuardGuard], resolve: {myUser : UsersResolverService}}
        ]
    },
    {path: 'module', loadChildren: './modules/coucou/coucou.module#CoucouModule'}
];



