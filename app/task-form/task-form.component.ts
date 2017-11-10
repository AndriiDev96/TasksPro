import { Component, Output, EventEmitter } from '@angular/core';

import { TaskService } from '../list/task.service';

@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html',
    styleUrls: ['task-form.component.css']
})

export class TaskFormComponent{
    title: string;
    
    constructor(private taskService: TaskService){};

    onSubmit(){
        this.taskService.createTask(this.title);
    }
    /*create(){
        event.preventDefault(); //щоб зупинити відправку даних

        let task: Task = new Task(this.newTaskTitle);
        this.newTaskTitle = '';
        
        this.tasks.push(task);
    };
    */
}
