import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})

export class User {
  @Input({required:true}) user !: UserModel;
  @Input({required: true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    console.log(this.selected);
    this.select.emit(this.user.id);
  }
}
