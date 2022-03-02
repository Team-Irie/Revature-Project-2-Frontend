import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CancelMessageComponent } from '../cancel-message/cancel-message.component';

@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.css']
})
export class CancelDialogComponent implements OnInit {

  confirmCancel(){
    this.dialog.open(CancelMessageComponent);
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
