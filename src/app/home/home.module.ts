import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
      ScrollingModule,
  DragDropModule,
  MatSelectModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
