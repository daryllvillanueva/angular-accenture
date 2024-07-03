import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasks/tasks.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  @Output() close = new EventEmitter<void>()
  // using directives forms module. add signal
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";
  private taskService = inject(TaskService)

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, 
      this.userId
    );
    this.close.emit();
  }
}
