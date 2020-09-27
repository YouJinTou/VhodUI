import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unit } from '../models/unit';

@Component({
  selector: 'app-delete-prompt',
  templateUrl: './delete-prompt.component.html',
  styleUrls: ['./delete-prompt.component.css']
})
export class DeletePromptComponent implements OnInit {
  title: string;
  saveText: string;

  constructor(
    public dialogRef: MatDialogRef<DeletePromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close({
      shouldDelete: false
    });
  }

  onDeleteClick(): void {
    this.data['shouldDelete'] = true;
  }

}
