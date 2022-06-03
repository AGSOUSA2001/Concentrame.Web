import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesComponent } from './notices.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FoodComponent } from './categorys/food/food.component';
import { TecnologyComponent } from './categorys/tecnology/tecnology.component';
import { ReadComponent } from './read/read.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const routes: Routes = [
  { path: '', component: NoticesComponent },
  { path: 'food', component: FoodComponent },
  { path: 'tecnology', component: TecnologyComponent },
  { path: 'notice/:id', component: ReadComponent },
];

@NgModule({
  declarations: [
    NoticesComponent,
    FoodComponent,
    TecnologyComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NoticesModule { }
