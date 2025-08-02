import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import {TasksComponent} from './tasks/tasks.component';

//data related imports
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  users = DUMMY_USERS;
  selectedUserId : string = 'u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
