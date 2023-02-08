import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalasRoutingModule } from './palas-routing.module';
import { PalasComponent } from './palas.component';


@NgModule({
  declarations: [
    PalasComponent
  ],
  imports: [
    CommonModule,
    PalasRoutingModule
  ]
})
export class PalasModule { }
