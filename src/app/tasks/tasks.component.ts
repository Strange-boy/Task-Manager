import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {NewTaskComponent} from './new-task/new-task.component';
import { type NewTaskModel} from './new-task/new-task.model';
import {TasksService} from './tasks.service';

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

  constructor(private tasksService : TasksService) {
  }

  get selectedTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    return this.tasksService.removeTasks(id);
  }

  onNewTaskStarted(){
    this.isNewTaskAdded = true;
  }

  onCloseAddTasks(){
    this.isNewTaskAdded = false;
  }
}
