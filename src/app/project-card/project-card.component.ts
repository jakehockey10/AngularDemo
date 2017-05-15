import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

  showImage(project): boolean {
    return this.project.image !== '' && this.project.image !== undefined;
  }

  hasDescription(): boolean {
    return this.project.description !== '' && this.project.description !== undefined;
  }

  hasTitle(): boolean {
    return this.project.name !== '' && this.project.name !== undefined;
  }
}
