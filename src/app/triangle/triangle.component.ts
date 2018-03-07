import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: '[triangle]',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent {
  @Input() height;
  @Input() width;
  @Input() color;
  points;

  constructor() { }
  
  ngOnChanges() {
    this.points = `0 ${this.height}, ${this.width / 2} 0, ${this.width} ${this.height}`;
  }

}
