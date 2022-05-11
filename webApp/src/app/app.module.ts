import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolItemComponent } from './school-item/school-item.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SchoolsService } from 'src/services/schools.service';
import { ApiService } from 'src/services/api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchFormComponent } from './search-form/search-form.component';
import { EmptyListComponent } from './empty-list/empty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolItemComponent,
    DetailPageComponent,
    SearchPageComponent,
    HomeComponent,
    SearchFormComponent,
    EmptyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [SchoolsService, ApiService, FormBuilder, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
