import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  // Data for Gantt
  public data: object[];
  public taskSettings: object;
  public columns: object[];
  public ngOnInit(): void {


      this.data =  [
          {
              TaskID: '',
              TaskName: 'Project Initiation',
              StartDate: new Date('03/10/2020'),
              Duration: 2.2
          },
          {
              TaskID: 5,
              TaskName: 'Project Estimation',
              StartDate: new Date('3/16/2020'),
              EndDate: new Date('3/18/2020')
          },
          {
            TaskID: '',
            TaskName: 'Project Completion',
            StartDate: new Date('03/18/2020'),
            EndDate: new Date('03/31/2020')
        },
      ];
      this.taskSettings = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          dependency: 'Predecessor',
          child: 'subtasks'
      };
      this.columns = [{ field: 'TaskName', headerText: 'Task Name' },]
  }
}