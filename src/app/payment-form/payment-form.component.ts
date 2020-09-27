import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Unit, Dues } from '../models/unit';
import { UnitsService } from '../units.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  dues: Dues[];
  upcoming: Dues[];

  constructor(
    public dialogRef: MatDialogRef<PaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Unit,
    private unitsService: UnitsService) {
    this.dues = [];
    this.upcoming = [];

    data.history.forEach(h => {
      if (!h.isPaid) {
        this.dues.push(h);
      }
    });

    this.dues.push({ month: 'Октомври', isPaid: false });
    this.dues.push({ month: 'Ноември', isPaid: false });
    this.dues.push({ month: 'Декември', isPaid: false });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  payMonth(month: string) {
    let pastDuesIndex = this.dues.findIndex(pd => pd.month == month);

    this.dues.splice(pastDuesIndex, 1);

    let found = false;
    
    this.data.history.forEach(h => {
      if (h.month == month) {
        found = true;
        h.isPaid = true;
      }
    });

    if (!found) {
      this.data.history.push({
        month: month,
        isPaid: true
      })
    }
  }

}
