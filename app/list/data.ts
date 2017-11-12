import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
    const tasks = [
        {
            id:1,
            title: 'Изучить JavaScript',
            completed: false
        },
        {
            id:2,
            title: 'Изучить Angular 2',
            completed: false
        },
        {
            id:3,
            title: 'Написать приложение',
            completed: false
        },
	{
            id:4,
            title: 'Learn Promises in JavaScript',
            completed: false
        },
	
    ];
    return {tasks};
}
}