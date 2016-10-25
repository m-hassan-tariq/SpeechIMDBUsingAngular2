import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'dashboard/home',
                pathMatch: 'full'
            },
        //lazy loading module
            {
                path: '',
                loadChildren: 'Scripts/app/search-movies/search-movies-main.module#SearchMoviesMainModule'
            },
            {
                path: '',
                loadChildren: 'Scripts/app/dashboard2/dashboard2.module#DashboardMainModule'
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
    
