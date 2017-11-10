import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/toPromise";

//import { tasks } from './data';
import { Task } from './task'; 

@Injectable()
export class TaskService{
    tasks: Task[] = [];
    private apiUrl = 'api/tasks';
    
    constructor(private http: Http){ }
    

    getTasks(): Promise<Task[]>{
        console.debug("getTasks method");

        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data)
            .then(tasks => this.tasks = tasks)
            .catch(this.handleError);                              //метод для обробки ошибки
    }
     
     createTask(title: string){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let task = new Task(title);
        
        this.http.post(this.apiUrl, task, options)                 //запит
                 .toPromise()
                 .then(res => res.json().data)
                 .then(task => this.tasks.push(task))
                 .catch(this.handleError);
    }

    deleteTask(task: Task){
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${task.id}`;
        
        this.http.delete(url, options)   
                 .toPromise()
                 .then(response =>{
                 let index = this.tasks.indexOf(task);
                 
                 if(index > -1){
                    this.tasks.splice(index, 1);
                    }
                })
                .catch(this.handleError);
    }
    toggleTask(task: Task){
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let url = `${this.apiUrl}/${task.id}`;
        
        this.http.put(url, task, options)   
                 .toPromise()
                 .then(response =>{
                    task.completed = !task.completed;
                })
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('Error!', error);
        return Promise.reject(error.message || error);
    }

} 