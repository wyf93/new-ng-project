import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'moduleA',loadChildren: 'app/module-a/module-a.module#ModuleAModule'
  },
  {
    path: 'moduleB',loadChildren: 'app/module-b/module-b.module#ModuleBModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
