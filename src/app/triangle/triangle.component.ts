import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[triangle]',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {
  @Input() height;
  @Input() width;
  @Input() color;
  points;

  constructor() {
  }

  ngOnInit() {
    this.points = `0 ${this.height}, ${this.width / 2} 0, ${this.width} ${this.height}`;
  }

}
