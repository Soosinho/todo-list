import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  tasks: Array<any> = []
  lastId: number = 0

  task_input = new FormControl('', [Validators.required]);

  adicionar_tarefa() {
    if (this.task_input.valid) {
      this.tasks.push({ id: this.lastId + 1, task: this.task_input.value })

      this.lastId++
      this.task_input.reset()
    }
  }

  delete_task(task: any) {
    const index = this.tasks.indexOf(task)

    this.tasks.splice(index, 1)
  }
}
