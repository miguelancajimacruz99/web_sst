import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {
  // Modelo para bindear datos (opcional, si usas ngModel)
  nombre = '';
  dni = '';
  correo = '';
  tipoCertificado = '';

  submitForm() {
    // Evita recarga de página (si no usas Angular Forms)
  
  }
}
