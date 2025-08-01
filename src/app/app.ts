import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {User} from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log("User with the id " + id + " just clicked");
  }
}
