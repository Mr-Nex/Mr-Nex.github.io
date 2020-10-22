import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'about', loadChildren:() => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'resume', loadChildren:() => import('./skills/skills.module').then(m => m.SkillsModule) },
  { path: 'projects', loadChildren:() => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'contact', loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
