import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryResolverService } from '@services';
import { HomeComponent, ResultComponent } from '@pages';
import { ResultGuard } from './services/result.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { categories: CategoryResolverService }
  },
  {
    path: 'result',
    canActivate: [ResultGuard],
    component: ResultComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
