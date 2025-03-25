import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides = [
    {
      image: 'assets/iniciofinal.jpeg',
      title: 'ASESORÍA LEGAL EN MATERIA DE SEGURIDAD Y SALUD EN EL TRABAJO',
      description: 'Asesoria especializada en materia de seguridad',
    
    },
    {
      image: 'assets/conversacion.jpeg',
      title: 'GESTIÓN INTEGRAL DE LA SEGURIDAD INDUSTRIAL, SALUD OCUPACIONAL',
      description: 'Gestion en seguridad industrial y salud ocupacional.',
     
    },
    {
      image: 'assets/rapel.jpeg',
      title: 'SUPERVISION EN MATERIA DE SEGURIDAD EN EL TRABAJO ',
      description: 'supervision y ejecucion en seguridad',
      
    },
  ];
  
  stats = [
    { icon: "assets/contrato.png", label: "Años de Experiencia" },
    { icon: "assets/conteo-de-globulos.png", label: "Empresas Atendidas" },
    { icon: "assets/ingenieria (2).png", label: "Profesionales Especialistas" },
    { icon: "assets/entrenador.png", label: "Capacitados en SST" },
  ];
  
  
  currentIndex = 0;

  constructor() {
    setInterval(() => this.next(), 5000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlidePosition();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slides = document.querySelector('.slides') as HTMLElement;
    slides.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
  services = [
    {
      title: "Auditoria según Ley 29783 Ley de Seguridad y Salud en el Trabajo",
      description: "Auditor Independiente registrado en MINTRA para la Evaluación Periódica del Sistema deGestión de la Seguridad y Salud en el Trabajo, conforme a lo Dispuesto en el Reglamento de la Ley de Seguridad y Salud en el Trabajo",
      image: "assets/balance (1).png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Diseño e implementación de Sistemas de Gestión de SST",
      description: "Basado en la Ley 29783 Ley de Seguridad y Salud en el Trabajo y su Reglamento",
      image: "assets/contrato.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Diagnóstico de línea Base Inicial y periódica",
      description: "Realización de Diagnóstico de línea Base Inicial y periódica;(art.37 Ley 29783)",
      image: "assets/historial-medico.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Elaboración de Documentos de la Gestión de la Seguridad y Salud en el Trabajo.",
      description: "Elaboración de Documentos de la Gestión de la Seguridad y Salud en el Trabajo.",
      image: "assets/expediente (1).png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Capacitación y entrenamiento",
      description: "Servicio de Capacitación y entrenamiento especializado en Materia de Seguridad y Salud en el Trabajo.",
      image: "assets/entrenador.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Soporte técnico en campo",
      description: "Inspección, diseño y Señalización. Planificación y ejecución de simulacros. Monitoreos Ocupacionales",
      image: "assets/soporte-tecnico.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Matriz de Requisitos legales",
      description: "Elaboración y Actualización de Matriz de Requisitos legales en Materia de Seguridad y Salud en el Trabajo",
      image: "assets/matriz.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
    {
      title: "Asesoramiento, Elaboración de Expedientes y Actualización de Normativa",
      description: "Asesoramiento y Elaboración de Expedientes de Fiscalización Laboral (SUNAFIL)",
      image: "assets/expediente.png",
      icon: "assets/ingenieria (2).png",
      hover: false
    },
  ];
  mostrarTextoCompleto = false;

  toggleTexto() {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }

  

}
