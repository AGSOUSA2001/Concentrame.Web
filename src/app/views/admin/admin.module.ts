import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from 'src/app/providers/auth.guard';
import { LoggedGuard } from 'src/app/providers/logged.guard';
import { ListNoticesComponent } from './admin-notices/list-notices/list-notices.component';
import { CreateNoticesComponent } from './admin-notices/create-notices/create-notices.component';
import { EditNoticesComponent } from './admin-notices/edit-notices/edit-notices.component';
import { ListLinksComponent } from './admin-links/list-links/list-links.component';
import { CreateLinksComponent } from './admin-links/create-links/create-links.component';
import { EditLinksComponent } from './admin-links/edit-links/edit-links.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeleteNoticesComponent } from './admin-notices/list-notices/delete-notices/delete-notices.component';
import { DeleteLinksComponent } from './admin-links/list-links/delete-links/delete-links.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [LoggedGuard] },
  { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard]},
  { path: 'notices', component: ListNoticesComponent, canActivate: [AuthGuard]},
  { path: 'notices/create', component: CreateNoticesComponent, canActivate: [AuthGuard]},
  { path: 'notices/edit/:id', component: EditNoticesComponent, canActivate: [AuthGuard]},
  { path: 'links', component: ListLinksComponent, canActivate: [AuthGuard]},
  { path: 'links/create', component: CreateLinksComponent, canActivate: [AuthGuard]},
  { path: 'links/edit/:id', component: EditLinksComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    ListNoticesComponent,
    CreateNoticesComponent,
    EditNoticesComponent,
    ListLinksComponent,
    CreateLinksComponent,
    EditLinksComponent,
    DeleteNoticesComponent,
    DeleteLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
