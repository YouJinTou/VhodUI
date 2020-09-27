import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unit } from '../models/unit';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {
  title: string;
  saveText: string;

  constructor(
    public dialogRef: MatDialogRef<AddUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Unit) { }

  ngOnInit(): void {
    this.title = this.data.id ? "Променя на жилище" : "Добавяне на жилище";
    this.saveText = this.data.id ? "Промени" : "Добави";
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
