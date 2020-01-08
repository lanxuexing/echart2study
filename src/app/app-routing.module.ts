import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloWordComponent } from './hello-word';
import { PieLegendComponent } from './pie-legend';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hello-word', component: HelloWordComponent },
  { path: 'pie-legend', component: PieLegendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
