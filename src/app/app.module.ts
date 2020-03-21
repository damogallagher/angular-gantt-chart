import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule, EditService, FilterService, SortService, SelectionService, ToolbarService, DayMarkersService } from '@syncfusion/ej2-angular-gantt';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GanttModule
  ],
  providers: [ EditService , FilterService, SortService, SelectionService, ToolbarService, DayMarkersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
