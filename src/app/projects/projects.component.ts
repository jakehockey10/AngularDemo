import { AfterViewChecked } from '@angular/core/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import * as Holder from 'holderjs';

import { Project } from '../project';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewChecked {
  projects: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

  public ngAfterViewChecked(): void {
    Holder.run();
  }
}
