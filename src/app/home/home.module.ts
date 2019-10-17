import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: '',
        component: HomePage,
        children: [
          { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' }
        
        ]
      }

    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
