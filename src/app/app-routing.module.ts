import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { PagesComponent } from './pages/pages.component';
import { ReadingLogComponent } from './pages/reading-log/reading-log.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: PagesComponent,
    children : [
      { path: 'home', component: HomeComponent },
      { path: 'links', component: LinksComponent },
      { path: 'reading-log', component: ReadingLogComponent },
      { path: 'cv', component: CvComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
