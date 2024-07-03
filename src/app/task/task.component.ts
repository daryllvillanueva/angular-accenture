import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/tasks.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) name!: string; 
  @Input({required: true}) userId!: string; 
  isAddingTask = false;

  constructor(private taskService: TaskService) {}
  
  get selectedUserTasks() {
    return this.taskService.getUserTask(this.userId)
  }

  onCompleteTask(id:string) {
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
