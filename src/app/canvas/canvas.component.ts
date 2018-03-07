import { Component, OnInit } from '@angular/core';
import { allowDrop, drag, dropCopy } from '../utilities/dragDrop';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  allowDrop = allowDrop;
  elements: any[] = [];

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

  handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    if (data.length > 1) {
      const type = data.split(':')[0];
      const element = {
        type,
        color: randomColor(),
        width: 20,
        height: 20,
        x: 10,
        y: 10
      };
      this.elements.push(element);
      console.log('elements: ', this.elements);      
    } else {

    }
  }

}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`
}

