import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { PagesComponent } from './pages/pages.component';
import { ReadingLogComponent } from './pages/reading-log/reading-log.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children : [
      { path: 'home', component: HomeComponent },
      { path: 'links', component: LinksComponent },
      { path: 'reading-log', component: ReadingLogComponent },
    ]
  },
  /*{ path: '', pathMatch: 'full', redirectTo: 'home' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
