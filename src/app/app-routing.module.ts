import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { LoginComponent } from './pages/login/login.component';
import { MishijosComponent } from './pages/mishijos/mishijos.component';
import { DineroComponent } from './pages/dinero/dinero.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ChildrenComponent } from './pages/children/children.component';
import { DetailDinerComponent } from './pages/detail-diner/detail-diner.component';

// layout
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'mis-hijos',
        component: MishijosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'dinero',
        component: DineroComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'comidas',
        component: ComidasComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'nuevo-hijo',
    component: ChildrenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'historial-consumo',
    component: DetailDinerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
