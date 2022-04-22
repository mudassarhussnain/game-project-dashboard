import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {  UserListComponent } from '../../user-list/user-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ServicesListComponent } from 'app/services-list/services-list.component';
import { ProjectsListComponent } from 'app/projects-list/projects-list.component';
import { ProjectsHistoryComponent } from 'app/projects-history/projects-history.component';
// import { ProjectsComponent } from 'app/projects/projects.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'',redirectTo:'admin-dashboard', pathMatch:'full'},
    { path: 'admin-dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {path:'services-list', component:ServicesListComponent},
    // {path:'projects',component:ProjectsComponent},
    // { path: 'table-list',     component: TableListComponent },
    {path:'projects-list',component:ProjectsListComponent},
    {path:'projects-history',component:ProjectsHistoryComponent},
    { path: 'user-list',     component: UserListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
