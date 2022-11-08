import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SchoolItemComponent } from './components/school-item/school-item.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { HomeApi } from './api/home.api';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SchoolItemComponent,
    DetailPageComponent,
    SearchPageComponent,
    EmptyListComponent,
  ],
  providers: [HomeApi],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
