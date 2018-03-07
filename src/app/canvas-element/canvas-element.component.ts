import { Component, OnInit, Input } from '@angular/core';
//import { drag } from '../utilities/dragDrop';

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
  @Input() id;


  constructor() {}

  ngOnInit() {
  }

}
