import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { BaseLayoutRoutingModule } from './base-layout.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/share/angular-material-modules';

@NgModule({
  declarations: [
    BaseLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaseLayoutRoutingModule,
    AngularMaterialModule
  ]
})
export class BaseLayoutModule { }
