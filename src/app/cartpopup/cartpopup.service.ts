import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { CartComponent } from '../cart/cart.component'

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(CartComponent);
  }
}