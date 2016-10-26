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
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
    
