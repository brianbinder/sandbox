import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-canvas-element',
  templateUrl: './canvas-element.component.html',
  styleUrls: ['./canvas-element.component.scss']
})
export class CanvasElementComponent implements OnInit {
  @Input() type;
  @Input() color;
  @Input() width;
  @Input() height;
  @Input() x;
  @Input() y;

  constructor() { }

  ngOnInit() {
  }

}
