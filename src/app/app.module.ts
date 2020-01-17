import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './pages/login/login.component';
import { MishijosComponent } from './pages/mishijos/mishijos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { InputComponent } from './components/input/input.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DineroComponent } from './pages/dinero/dinero.component';
import { ComidasComponent } from './pages/comidas/comidas.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { HeaderComponent } from './components/header/header.component';
import { ChildrenComponent } from './pages/children/children.component';
import { FilepreviewComponent } from './components/filepreview/filepreview.component';
import { DetailDinerComponent } from './pages/detail-diner/detail-diner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MishijosComponent,
    InputComponent,
    MainLayoutComponent,
    NavbarComponent,
    DineroComponent,
    ComidasComponent,
    ReportesComponent,
    HeaderComponent,
    ChildrenComponent,
    FilepreviewComponent,
    DetailDinerComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
