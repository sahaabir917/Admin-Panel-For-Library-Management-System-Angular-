import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponentComponent } from './login-form-component/login-form-component.component';
import { DashboardcomponetComponent } from './dashboardcomponet/dashboardcomponet.component';
import { AuthGuard } from './auth.guard';
import { RoomComponentComponent } from './room-component/room-component.component';
import { BookformComponent } from './bookform/bookform.component';

const routes: Routes = [
  { path: '', component: LoginFormComponentComponent },
  {
    path: 'dashboard',
    component: DashboardcomponetComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'addRoom', component: RoomComponentComponent },
  { path: 'addBook', component: BookformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
