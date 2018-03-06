import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { BoxesComponent } from './boxes/boxes.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BoxComponent } from './box/box.component';
import { TriangleComponent } from './triangle/triangle.component';
import { SvgComponent } from './svg/svg.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    BoxComponent,
    TriangleComponent,
    SvgComponent,
    SidebarComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
