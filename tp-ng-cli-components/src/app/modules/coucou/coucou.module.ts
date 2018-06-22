import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCoucouComponent } from './component/test-coucou/test-coucou.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestCoucouComponent],
  exports: [TestCoucouComponent]
})
export class CoucouModule { }
