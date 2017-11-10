//EventEmiter призначений для створення об'єктів які можуть генерувати події

import { Component, Input, Output, EventEmitter } from '@angular/core';  //import декоратора Input

import { Task } from '../list/task';

@Component({
    moduleId: module.id,
    selector: 'task-item',
    templateUrl: 'task-item.component.html',
    styleUrls: ['task-item.component.css']
})

export class TaskItemComponent{
   @Input() task: Task;   //@Input() сам декоратор для виведення списку
   @Output() delete = new EventEmitter();
   @Output() toggle = new EventEmitter();

    onToggle(){
        this.toggle.emit(this.task);
    }

    onDelete(){
        this.delete.emit(this.task);
    }
    
}