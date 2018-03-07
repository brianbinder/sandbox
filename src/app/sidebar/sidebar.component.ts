import { Component, OnInit } from '@angular/core';
import { allowDrop, drag, dropCopy } from '../utilities/dragDrop';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  width;
  height;
  drag = drag;


  constructor() {
  }

  ngOnInit() {
    const list = document.getElementsByClassName('sidebar list')[0];
    //this.width = 90 - 16;
    const fontSize = window.getComputedStyle(list, null).getPropertyValue('font-size');
    this.height = parseFloat(fontSize) * 2;
    this.width = this.height;
  }

}
