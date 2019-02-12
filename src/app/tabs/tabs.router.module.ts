import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { HomePage } from '../home/home.page';
import { AddPage } from '../add/add.page';
import { EditPage } from '../edit/edit.page';
import { DetailsPage } from '../details/details.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'details/:id',
        children: [
          {
            path: '',
            loadChildren: '../details/details.module#DetailsPageModule'
          }
        ]
      },
      {
        path: 'edit/:id',
        children: [
          {
            path: '',
            loadChildren: '../edit/edit.module#EditPageModule'
          }
        ]
      },
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: '../add/add.module#AddPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];


const routess: Routes = [
  
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
        
      },
      {
        path: '',
        loadChildren: '../home/home.module#HomePageModule'
        
      },
      {
        path: 'details/:id',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'edit', 
        loadChildren: '../edit/edit.module#EditPageModule'
      },
      {
        path: 'add', 
        loadChildren: '../add/add.module#AddPageModule'
      }
      

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
