import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SliderComponent } from './slider/slider.component'
import { PopupService } from './popup/popup.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,NavbarComponent,SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }
}