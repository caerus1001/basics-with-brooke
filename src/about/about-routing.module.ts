import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'about/brooke', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
