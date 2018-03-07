import { Directive, ElementRef, HostListener } from '@angular/core';

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
    const id = `${type}:${time}`;
    if (!event.target.id) {
      event.target.setAttribute('id', id);
      event.dataTransfer.setData("text", id);
    } else {
      event.dataTransfer.setData("text", event.target.id);      
    }
  }

  @HostListener('document:dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
  }

}
