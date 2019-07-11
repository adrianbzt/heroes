// tslint:disable-next-line:import-spacing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
// tslint:disable-next-line:import-spacing
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes =
    [
        {
            path: 'heroes',
            component: HeroesComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        }
    ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {

}
