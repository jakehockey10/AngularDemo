import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapExampleComponent } from './map-example/map-example.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { ProjectDetailsComponent } from 'app/project-details/project-details.component';
import { ProjectsComponent } from 'app/projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'map', component: MapExampleComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
