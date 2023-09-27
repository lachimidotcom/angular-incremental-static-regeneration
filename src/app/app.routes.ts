import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
          revalidate: 100, // 👈 Add the revalidate key
        },
      },
];