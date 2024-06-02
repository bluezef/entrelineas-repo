import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { CardpopupComponent } from '../cardpopup/cardpopup.component'

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    this.dialog.open(CardpopupComponent);
  }
}