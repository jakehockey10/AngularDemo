import { Component } from '@angular/core';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProjectsService]
})
export class AppComponent {
  title = 'app works!';
}
