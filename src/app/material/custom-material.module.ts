import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
  ],
})
export class CustomMaterialModule {}
