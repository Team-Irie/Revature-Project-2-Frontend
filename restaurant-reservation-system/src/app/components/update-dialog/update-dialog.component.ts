import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UpdateReservationPageComponent } from '../update-reservation-page/update-reservation-page.component';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  openUpdate(){
    this.dialog.open(UpdateReservationPageComponent)
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
