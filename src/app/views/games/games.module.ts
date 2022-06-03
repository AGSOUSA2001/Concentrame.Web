import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { RouterModule, Routes } from '@angular/router';
import { PuzleComponent } from './puzle/puzle.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MemoryComponent } from './memory/memory.component';
import { SimonComponent } from './simon/simon.component';
import { MatStepperModule } from '@angular/material/stepper';


const routes: Routes = [
  { path: '', component:  GamesComponent},
  { path: 'puzle', component:  PuzleComponent},
  { path: 'memory', component:  MemoryComponent},
  { path: 'simon', component:  SimonComponent},
];

@NgModule({
  declarations: [
    GamesComponent,
    PuzleComponent,
    MemoryComponent,
    SimonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatStepperModule
  ],
  exports: [
    RouterModule
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GamesModule { }
