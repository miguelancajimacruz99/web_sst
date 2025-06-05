import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { AlertController, LoadingController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements AfterViewInit {
  
  ngAfterViewInit(): void {
    // Esperamos un momento para asegurarnos que el DOM esté 100% listo
    setTimeout(() => {
      const video = document.querySelector<HTMLVideoElement>('.video-background');
      if (video) {
        video.muted = true; 
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log('🎬 Video reproduciéndose'))
            .catch(error => console.warn('⚠️ No se pudo reproducir automáticamente:', error));
        }
      }
    }, 500); // Ajusta el tiempo si es necesario
  }
  mostrarBoton = true;

  reproducirConSonido(): void {
    const video = document.querySelector<HTMLVideoElement>('.video-background');
    if (video) {
      video.muted = false;
      video.play().then(() => {
        this.mostrarBoton = false; // ocultar el botón
      }).catch(err => console.warn('No se pudo reproducir con sonido', err));
    }
  }
  
  

}
