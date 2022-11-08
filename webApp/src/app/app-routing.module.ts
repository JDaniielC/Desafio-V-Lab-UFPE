import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// https://balta.io/blog/angular-rotas-guardas-navegacao
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
