import { Component, OnInit } from '@angular/core';
import { allowDrop, drag, dropCopy } from '../utilities/dragDrop';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  dropCopy = dropCopy;
  allowDrop = allowDrop;

  constructor() {
    window.addEventListener('resize', this.size);
  }

  ngOnInit() {
    this.size();
  }

  size() {
    let height = window.innerHeight;
    let width = 0.85 * window.innerWidth;
    const canvas = document.getElementsByClassName('canvas')[0] as HTMLElement;
    canvas.style.height = `${height - 30}px`;
    canvas.style.width = `${width}px`;
  }

}
