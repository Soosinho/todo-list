import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() task!: any
  @Output() delete_task = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete_task.emit()
  }

}
