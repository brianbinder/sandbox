import { Component, OnInit, Input } from '@angular/core';
import $ from 'jquery';

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

  showHandles(event) {
    console.log($(event.target).parents('.canvasElement').children('.handle'));
    $(event.target).parents('.canvasElement').children('.handle').toggleClass('active');
  }

}
