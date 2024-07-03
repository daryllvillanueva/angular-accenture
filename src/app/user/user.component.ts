import { Component, EventEmitter, Input, Output, computed, input, signal, output} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // NOTE: Decorator Approach. Call the values by their property name in the component.html
  // object type
  @Input({required: true}) user!: User;
  @Input({required: true}) selected: boolean = false;
  
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!: string;
  @Output() select = new EventEmitter();

  // using the output() function
  // select = output<string>();

  // getter
  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser () {
    this.select.emit(this.user.id)
  } 
  
  // NOTE: This is a Signal Approach for accepting component inputs. Call the values as functions in the component.html
  // to use the property, declare it by property() and it requires a value and data type
  // avatar = input.required<string>();
  // name = input.required<string>();
 
  // this is computed signal, declare it as a function to read that signal value
  // imagePath = computed(() => {
  //   return 'users/' + this.avatar()
  // });

  

}
