import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Tasks } from './tasks.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) task!: Tasks;
  @Output() complete = new EventEmitter<string>();
  private completeTask = inject(TaskService);

  onCompleteTask() {
    this.completeTask.removeTask(this.task.id)
  }
}
