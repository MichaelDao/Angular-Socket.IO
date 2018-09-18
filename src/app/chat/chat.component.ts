import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  toDoList = ['yeet', 'yeeted'];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  addToDo(value) {
    // this.toDoList.push(value);
    this.http.post('/chat', {
      description: value
    }).subscribe()
  }
}
