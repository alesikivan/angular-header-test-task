import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent },
      { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
