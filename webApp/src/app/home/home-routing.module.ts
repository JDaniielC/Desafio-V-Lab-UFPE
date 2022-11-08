import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomeComponent } from './home.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'school/:id', component: DetailPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
