import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    // Aquí se almacena los datos del formulario
    formData = {
      NOMBRE: '',
      CORREO: '',
      TELEFONO: '',
      MENSAJE: ''
    };
  
    constructor(
      private service: AuthService,
      private loadingController: LoadingController,
      private alertController:AlertController,
    ) {

    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Registrando datos, por favor esperee...',
      });
      await loading.present();
      return loading;
    }
    dismissLoading() {
      this.loadingController.dismiss();
    }

  async presentAlert(message: string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'GASSI PERU',
      message: message,
      buttons: ['OK']
    });

    return await alert.present();
  }
  async submitContactForm() {
    await this.presentLoading(); 
    console.log('Datos del formulario:', this.formData);
    this.service.insertardatos(this.formData).subscribe(
      (response: any) => {
        if (response && response.status === 'ok') {
          this.dismissLoading();
          this.presentAlert('Registrado correctamente');

           this.formData = {
            NOMBRE: '',
            CORREO: '',
            TELEFONO: '',
            MENSAJE: ''
          };
        }
      },
      (error) => {
        this.dismissLoading();
        this.presentAlert('Error registrando datos');
 
      }
    );

  }
  
}
