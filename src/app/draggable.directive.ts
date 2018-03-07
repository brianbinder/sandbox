import { Directive, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.setAttribute('draggable', true);
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const type = event.target.className;
    const time = Math.floor(Math.random() * 1000000);
    let id;
    if ($(event.target).hasClass('handle')) {
      const elementId=$(event.target).parent('.canvasElement').attr('id').split(':')[1];
      id = `${type}:${elementId}`;
      console.log(id);
    }    
    else if (!event.target.id) {
      id = `${type}:${time}`;
      event.target.setAttribute('id', id);
    } else {
      id = event.target.id
    }
    const xStart = event.clientX;
    const yStart = event.clientY;
    const data = JSON.stringify({
      id,
      xStart,
      yStart
    });
    event.dataTransfer.setData("text", data);
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
  }

}
