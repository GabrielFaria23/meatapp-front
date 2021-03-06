import { Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurants', component: RestaurantsComponent},
    { path: 'restaurants/:id', component: RestaurantsComponent}
    { path: 'about', component: AboutComponent}
]