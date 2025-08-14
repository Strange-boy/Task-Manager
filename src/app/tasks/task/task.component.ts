import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Task} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';

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
   @Output() complete = new EventEmitter<string>();

   onCompleteTasks(){
     this.complete.emit(this.task.id);
   }

}
