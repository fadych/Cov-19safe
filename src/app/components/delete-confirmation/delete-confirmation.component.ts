import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationComponent>) { }

  ngOnInit() {
  }

  closeDialog(response) {
    this.dialogRef.close(response);
  }

}
