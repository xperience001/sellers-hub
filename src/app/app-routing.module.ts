import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './views/inner-core/base-layout/base-layout.component';
import { HomePageComponent } from './views/outer-core/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'Welcome to Home Page',
    },
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/inner-core/core-view-modules/dashboard/dashboard.module').then(
            (mod) => mod.DashboardsModule
          ),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
