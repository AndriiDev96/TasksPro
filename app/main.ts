import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //імпортуємо платформу на якому буде працювати додаток

import { AppModule } from './app.module'; //основний модуль додатка

const platform = platformBrowserDynamic();// создаємо платформу і далі в платформу відправляємо модуль додатка
platform.bootstrapModule(AppModule);