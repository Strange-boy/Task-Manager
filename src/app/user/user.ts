import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

interface User{
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  @Input({required:true}) user !: User;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
