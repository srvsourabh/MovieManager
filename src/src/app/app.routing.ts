import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MovieentryComponent } from "./movieentry/movieentry.component";
import { ViewmoviesComponent } from "./viewmovies/viewmovies.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movieentry', component: MovieentryComponent },
    { path: 'viewmovies', component: ViewmoviesComponent },
];

export const routingModule = RouterModule.forRoot(APP_ROUTES);
