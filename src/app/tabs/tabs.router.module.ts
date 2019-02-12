import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

import { HomePage } from '../home/home.page';
import { AddPage } from '../add/add.page';
import { EditPage } from '../edit/edit.page';
import { DetailsPage } from '../details/details.page';



const routes: Routes = [
  
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
      }
      

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
