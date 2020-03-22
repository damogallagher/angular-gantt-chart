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
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019')
          },
          {
              TaskID: 5,
              TaskName: 'Project Estimation',
              StartDate: new Date('04/02/2019'),
              EndDate: new Date('04/21/2019')
              /*subtasks: [
                  { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                  { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                  { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
              ]*/
          },
          {
            TaskID: '',
            TaskName: 'Project Completion',
            StartDate: new Date('03/03/2019'),
            EndDate: new Date('05/05/2019')
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