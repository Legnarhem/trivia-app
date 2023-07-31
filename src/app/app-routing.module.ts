import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolverService } from '@services';
import { HomeComponent, ResultComponent } from '@pages';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { categories: CategoryResolverService }
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
