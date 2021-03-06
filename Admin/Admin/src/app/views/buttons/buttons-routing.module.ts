import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons.component';
import { DropdownsComponent } from './dropdowns.component';
import { BrandButtonsComponent } from './brand-buttons.component';
import { SingleAchievmentComponent } from './single-achievment/single-achievment.component';
import {  EditAchievmentComponent } from './edit-achievment/edit-achievment.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'achievements'
      },
      {
        path: 'achievements',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'new-achievement',
        component:SingleAchievmentComponent ,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'edit-ach/:id',
        component: EditAchievmentComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
