// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { MenugeneralComponent } from './menugeneral/menugeneral.component';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { AulavirtualComponent } from './aulavirtual/aulavirtual.component';
import { ConmmunityComponent } from './conmmunity/conmmunity.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenugeneralComponent,
    NosotrosComponent,
    ServiciosComponent,
    BlogComponent,
    ContactoComponent,
    CertificadoComponent,
    AulavirtualComponent,
    ConmmunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    LayoutModule,            
    MatToolbarModule,       
    MatMenuModule,           
    MatButtonModule,          
    MatIconModule,           
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,         
    LayoutModule,
    MatListModule,
    FormsModule,
    IonicModule.forRoot(), 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
