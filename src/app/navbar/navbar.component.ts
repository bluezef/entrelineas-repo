import { Component, Input } from '@angular/core';
import { PopupService } from '../cartpopup/cartpopup.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() total=0.00
  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }
}
