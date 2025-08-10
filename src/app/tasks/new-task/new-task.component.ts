import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NewTaskModel} from './new-task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output () add = new EventEmitter<NewTaskModel>();
  enteredTitle  = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelTask() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      dueDate : this.enteredDate
    })
  }
}
