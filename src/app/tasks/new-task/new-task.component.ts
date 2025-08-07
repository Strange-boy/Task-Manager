import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancelTask() {
    this.cancel.emit();
  }
}
