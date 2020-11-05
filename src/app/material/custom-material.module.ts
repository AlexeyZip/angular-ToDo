import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
@NgModule({
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
  ],
  exports: [
    MatButtonModule,
    MatBadgeModule,
    MatBadgeModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
  ],
})
export class CustomMaterialModule {}
