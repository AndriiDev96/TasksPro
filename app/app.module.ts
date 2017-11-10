import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './list/data';


import { AppComponent } from './app.component';
import { TaskFormComponent} from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from './list/task.service';

@NgModule({
    imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService),
            ],
    declarations: [AppComponent,        //реєстрація Component
                   TaskFormComponent,
                   TaskListComponent,
                   TaskItemComponent
                  ],
    providers: [TaskService],       //реєстрація Service
    bootstrap: [AppComponent]
})

export class AppModule{

}