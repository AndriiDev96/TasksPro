import { Component, OnInit } from '@angular/core';

//import { tasks } from '../list/data';
import { Task } from '../list/task';
import { TaskService } from '../list/task.service';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: 'task-list.component.html', 
    styleUrls: ['task-list.component.css']
})

export class TaskListComponent implements OnInit{
   tasks: Task[];

    constructor(private taskService: TaskService){
        this.tasks = [];                                                    //Конструктор призначений для простої ініціалізації властивостей
    }

    //цей метод викличиться в момент ініціалізації компонентів
    ngOnInit(){
      this.taskService.getTasks().then(tasks => this.tasks = tasks);            //getTask повертає масив класу Task(список задач)
    }

    delete(task: Task){
      this.taskService.deleteTask(task);        //відправка задачі від item на Service
    }

    toggle(task: Task){
      this.taskService.toggleTask(task);
    }

}