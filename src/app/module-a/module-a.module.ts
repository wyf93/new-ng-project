import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const moduleARoutes = [
  {
    path: '', component: AComponent
  },
  {
    path: 'b', component: BComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(moduleARoutes),
    CommonModule
  ],
  declarations: [AComponent, BComponent]
})
export class ModuleAModule { }
