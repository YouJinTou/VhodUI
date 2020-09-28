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
  selectedMonths: string[];

  constructor(
    public dialogRef: MatDialogRef<PaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public unit: Unit,
    private unitsService: UnitsService) {
    this.dues = [];
    this.upcoming = [];

    unit.history.forEach(h => {
      if (!h.isPaid) {
        this.dues.push(h);
      }
    });

    this.unitsService.getNextMonths(unit.history.slice(-1)[0].month, 3).forEach(m => {
      this.dues.push({ isPaid: false, month: m });
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pay() {
    this.selectedMonths.forEach(month => {
      let pastDuesIndex = this.dues.findIndex(pd => pd.month == month);

      this.dues.splice(pastDuesIndex, 1);

      let found = false;

      this.unit.history.forEach(h => {
        if (h.month == month) {
          found = true;
          h.isPaid = true;
        }
      });

      if (!found) {
        this.unit.history.push({
          month: month,
          isPaid: true
        })
      }
    });
  }
}
