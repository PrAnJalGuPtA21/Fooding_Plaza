import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { SplashComponent } from './Pages/splash/splash.component';
import { ItemsComponent } from './Pages/items/items.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LayoutComponent } from './Pages/layout/layout.component';


export const routes: Routes = [
    {
        path: "",
        component: SplashComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: "about",
                component: AboutComponent
            },
            {
                path: "layout",
                component: LayoutComponent
            },
            {
                path: "items",
                component: ItemsComponent
            },
            {
                path: "contact",
                component: ContactComponent
            },
        ]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "layout",
        component: LayoutComponent
    },
];
