import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ListbutngxComponent } from './listbutngx/listbutngx.component';


const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'listngx',
        component: ListbutngxComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
