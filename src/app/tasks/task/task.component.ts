import {Component, inject, Input} from '@angular/core';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  imports: [
    CardComponent,
    DatePipe
  ],
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
   @Input({required: true}) task !: Task;
   private taskService = inject(TasksService)

   onCompleteTasks(){
     this.taskService.removeTasks(this.task.id);
   }
}
