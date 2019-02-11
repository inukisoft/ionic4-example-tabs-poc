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
          path:'',
          loadChildren: '../home/home.module#HomePageModule'
        }
        ]
      },
      {
        path: 'details',
        children: [
        {
          path:':id',
          loadChildren: '../details/details.module#DetailsPageModule'
        }
        ]
      },
      {
        path: 'edit',
        children: [
        {
          path:':id',
          loadChildren: '../edit/edit.module#EditPageModule'
        }
        ]
      },
      {
        path: 'add',
        children: [
        {
          path:'',
          loadChildren: '../add/add.module#AddPageModule'
        }
        ]
      },
      {
        path: '',
        redirectTo:'/tabs/home',
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


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
