import {Component, Input, Output, EventEmitter, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
  @Input() userId !: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle  = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCloseAddTasks() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      dueDate : this.enteredDate
    }, this.userId)

    this.close.emit();
  }
}
