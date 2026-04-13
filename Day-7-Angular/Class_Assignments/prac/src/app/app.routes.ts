import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { AddUser } from './dashboard/add-user/add-user';
import { DisplayUser } from './dashboard/display-user/display-user';


export const routes: Routes = [
    {
        path: "",
        component : Home
    },
    {
        path: "contact",
        component : Contact
    },
    {
        path: "about",
        component: About
    },
    {
        path: "dashboard",
        component: Dashboard,
        children: [
            {
                path: "",
                component: AddUser
            },
            {
                path: "showuser",
                component: DisplayUser
            }
        ]
    }
];
