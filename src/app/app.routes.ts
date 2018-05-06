import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { PreciosComponent } from '../app/components/precios/precios.component';
import { ProtegidaComponent } from '../app/components/protegida/protegida.component';
import { AuthGuardService } from '../app/services/auth-guard.service';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { 
        path:'protegida', 
        component: ProtegidaComponent,
        canActivate:[AuthGuardService] },
    { path: '**', pathMatch: 'full', redirectTo:  'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
