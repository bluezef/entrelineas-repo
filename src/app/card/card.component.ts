import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupService } from '../popup/popup.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imgsrc='#'
  @Input() titulo=''
  @Input() precio=''
  @Input() desc=''
  @Input() tag=''

  constructor(private popupService: PopupService) {}

  openPopup() {
    this.popupService.openPopup();
  }
}

