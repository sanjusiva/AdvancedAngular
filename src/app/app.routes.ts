import { Routes } from '@angular/router';
import { Users } from './RouteReuse/users/users';
import { About } from './RouteReuse/about/about';
import { App } from './app';
import { Parent } from './contentProjection/parent/parent';

export const routes: Routes = [
    { path: 'users', component: Users },
    { path: 'about', component: About },
    { path: 'first', component: App },
    { path: 'content', component: Parent },
    { path: '', redirectTo: 'first', pathMatch: 'full' }
];
