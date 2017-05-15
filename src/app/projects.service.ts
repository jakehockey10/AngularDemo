import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Project } from './project';

@Injectable()
export class ProjectsService {
  private dummyProjects = [
    new Project('Project 1', undefined, 'holder.js/350x150'),
    new Project('Project 2'),
    new Project('Project 3', undefined, 'holder.js/350x150'),
    new Project('Project 4'),
    new Project('Project 5', undefined, 'holder.js/350x150'),
    new Project('Project 6'),
    new Project('Project 7'),
    new Project('Project 8', '', 'holder.js/350x150')
  ];

  constructor() { }

  getProjects() {
    return Observable.of(this.dummyProjects).delay(500);
  }

  getProject(id: number): Promise<Project> {
    return this.getProjects().toPromise().then(projects => projects.find(project => project.id === id));
  }

}
