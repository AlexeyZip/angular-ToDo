import { SearchPipe } from './shared/search.pipe';
import { SharedModule } from './../shared/shared.modules';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthService } from './shared/components/services/auth.services';
import { CustomMaterialModule } from './../material/custom-material.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { AuthGuard } from './shared/components/services/auth.guard';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    SearchPipe,
    EditPageComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          {
            path: 'dashboard',
            component: DashboardPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'create',
            component: CreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'task/:id/edit',
            component: EditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AdminModule {}
