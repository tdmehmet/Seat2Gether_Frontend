import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSeat } from './components/busseat';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  declarations: [BusSeat]
})
export class BusSeatModule { }
