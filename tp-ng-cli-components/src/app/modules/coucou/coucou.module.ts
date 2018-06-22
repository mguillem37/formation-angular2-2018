import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCoucouComponent } from './component/test-coucou/test-coucou.component';
import { RouterModule } from '@angular/router';
import { ROUTES_MODULE_COUCOU } from './app.module.coucou.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES_MODULE_COUCOU)
  ],
  declarations: [TestCoucouComponent],
  exports: [TestCoucouComponent]
})
export class CoucouModule { }
