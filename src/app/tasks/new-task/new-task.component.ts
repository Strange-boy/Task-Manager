import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';

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
  enteredTitle  = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelTask() {
    this.cancel.emit();
  }
}
