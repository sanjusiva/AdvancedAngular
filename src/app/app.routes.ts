import { Routes } from '@angular/router';
import { Users } from './RouteReuse/users/users';
import { About } from './RouteReuse/about/about';
import { App } from './app';
import { Parent } from './contentProjection/parent/parent';
import { Search } from './impurePipe/search/search';
import { ViewChildCompnent } from './viewChild/view-child/view-child';

export const routes: Routes = [
    { path: 'users', component: Users },
    { path: 'about', component: About },
    { path: 'first', component: App },
    { path: 'content', component: Parent },
    { path: 'pipe', component: Search },
    { path: 'view', component: ViewChildCompnent },
    { path: '', redirectTo: 'first', pathMatch: 'full' }
];
