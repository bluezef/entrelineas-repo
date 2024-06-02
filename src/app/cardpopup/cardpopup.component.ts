import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cardpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './cardpopup.component.html',
  styleUrl: './cardpopup.component.css'
})
export class CardpopupComponent {
  @Input() imgsrc='#'
  @Input() titulo=''
  @Input() precio=''
  @Input() desc=''
  @Input() extra=''
  @Input() tag=''
  @Input() rating=1
}
