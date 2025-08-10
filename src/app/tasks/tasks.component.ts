import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import { type NewTaskModel} from './new-task/new-task.model';

@Component({
  selector : 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls : ['./tasks.component.css'],
  imports : [TaskComponent, NewTaskComponent]
})

export class TasksComponent {
  @Input({required : true}) name !: string;
  @Input({required: true}) userId !: string;
  isNewTaskAdded = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onNewTaskStarted(){
    this.isNewTaskAdded = true;
  }

  onCancelTask(){
    this.isNewTaskAdded = false;
  }

  onNewTasksCreated(taskData : NewTaskModel){
    this.tasks.unshift({
      id : new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })

    //finally we have to close the tab
    this.isNewTaskAdded = false;
  }

}
