import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-example',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.scss']
})
export class MapExampleComponent implements OnInit {
  title = 'Map Example';
  @Input() latitude = 51.678418;
  @Input() longitude = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
