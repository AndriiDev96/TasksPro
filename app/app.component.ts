import { Component } from '@angular/core';

//import { tasks } from './list/data';
import { Task } from './list/task';
//виводим форму об'єкта і оголоcимо її, як інтерфейс
/*interface ITask{
    title: string;
    completed: boolean;
}
*/

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent{
    //tasks: Task[] = tasks;
    title: string  = 'Add the task';

   /* create(title: string){

        const task = new Task(title);
        this.tasks.push(task);
    }
    */
}