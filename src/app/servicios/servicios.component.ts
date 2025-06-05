import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  services = [
    {
      title: "Auditoria según Ley 29783 Ley de Seguridad y Salud en el Trabajo",
      description: "Auditor Independiente registrado en MINTRA para la Evaluación Periódica del Sistema deGestión de la Seguridad y Salud en el Trabajo, conforme a lo Dispuesto en el Reglamento de la Ley de Seguridad y Salud en el Trabajo",
      image: "assets/auditoria.jpeg",
      hover: false
    },
    {
      title: "Diseño e implementación de Sistemas de Gestión de SST",
      description: "Basado en la Ley 29783 Ley de Seguridad y Salud en el Trabajo y su Reglamento",
      image: "assets/covers.jpeg",
      hover: false
    },
    {
      title: "Diagnóstico de línea Base Inicial y periódica",
      description: "Realización de Diagnóstico de línea Base Inicial y periódica;(art.37 Ley 29783)",
      image: "assets/diagnostico.jpeg",
      hover: false
    },
    {
      title: "Elaboración de Documentos de la Gestión de la Seguridad y Salud en el Trabajo.",
      description: "Elaboración de Documentos de la Gestión de la Seguridad y Salud en el Trabajo.",
      image: "assets/documentos.webp",
      hover: false
    },
    {
      title: "Capacitación y entrenamiento",
      description: "Servicio de Capacitación y entrenamiento especializado en Materia de Seguridad y Salud en el Trabajo.",
      image: "assets/rapel.jpeg",
      hover: false
    },
    {
      title: "Soporte técnico en campo",
      description: "Inspección, diseño y Señalización. Planificación y ejecución de simulacros. Monitoreos Ocupacionales",
      image: "assets/soporte.webp",
      hover: false
    },
    {
      title: "Matriz de Requisitos legales",
      description: "Elaboración y Actualización de Matriz de Requisitos legales en Materia de Seguridad y Salud en el Trabajo",
      image: "assets/matrizlegal.png",
      hover: false
    },
    {
      title: "Asesoramiento, Elaboración de Expedientes y Actualización de Normativa",
      description: "Asesoramiento y Elaboración de Expedientes de Fiscalización Laboral (SUNAFIL)",
      image: "assets/asesoramiento.webp",
      hover: false
    },
  ];
}
