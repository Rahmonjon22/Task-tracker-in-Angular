import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
// import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  // tasks: Task[] = TASKS;
  tasks: Task[] = [];

  constructor(private taskService: TaskService ){}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();

  }
}
