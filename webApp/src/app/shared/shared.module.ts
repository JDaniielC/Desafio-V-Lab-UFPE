import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchFormComponent } from './components/search-form/search-form.component';

// Modules
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  providers: [FormBuilder, HttpClient],
  declarations: [SearchFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    SearchFormComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule {}
