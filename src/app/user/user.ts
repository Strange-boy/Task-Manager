import {Component, Input} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const random = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() avatar!:string;
  @Input() name!:string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){

  }
}
