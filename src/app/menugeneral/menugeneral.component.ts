import { Component, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menugeneral',
  templateUrl: './menugeneral.component.html',
  styleUrls: ['./menugeneral.component.css']
})
export class MenugeneralComponent implements AfterViewInit {
  @ViewChild('drawer') drawer?: MatSidenav;
  public pdfSrc: string = 'assets/documents/Brochure GASSI PERÚ 2025 Actualizado.pdf'; 
  ngAfterViewInit(): void {
    // drawer ya está inicializado aquí
  }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    } else {
      console.warn('Drawer no está disponible');
    }
  }
  selectedMenu: string = ''; // almacena la opción seleccionada

selectMenu(menu: string) {
  this.selectedMenu = menu;
}
hideTopBar = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      // Scroll hacia abajo - ocultar barra
      this.hideTopBar = true;
    } else if (currentScroll < this.lastScrollTop) {
      // Scroll hacia arriba - mostrar barra
      this.hideTopBar = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }


}
