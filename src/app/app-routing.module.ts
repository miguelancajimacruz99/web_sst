import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { ConmmunityComponent } from './conmmunity/conmmunity.component';
import { AulavirtualComponent } from './aulavirtual/aulavirtual.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirige raíz a 'home'
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'conmmunity', component: ConmmunityComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'certificado', component: CertificadoComponent },
  { path: 'aulavirtual', component: AulavirtualComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
