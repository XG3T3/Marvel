import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailComponent } from './heroe-detail/heroe-detail.component';

const routes: Routes = [
  { path:"heroes",component:HeroesComponent },
  { path:"dashboard",component:DashboardComponent},
  { path: "detail/:id",component:HeroeDetailComponent},
  { path:"**",redirectTo:"dashboard",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
