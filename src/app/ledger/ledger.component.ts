import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUnitComponent } from '../add-unit/add-unit.component';
import { Unit } from '../models/unit';
import { UnitsService } from '../units.service';
import { DeletePromptComponent } from '../delete-prompt/delete-prompt.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LedgerComponent implements OnInit {
  dataSource: MatTableDataSource<Unit>;
  units: Unit[];
  expandedElement: Unit | null;
  columns: string[] = ['name'];

  constructor(private unitsService: UnitsService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Unit>(unitsService.getUnits());
    this.units = unitsService.getUnits();
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const target = (event.target as HTMLInputElement).value.toLowerCase();

    if (!target) {
      this.units = this.unitsService.getUnits();

      return;
    }

    let filteredUnits: Unit[] = [];

    this.unitsService.getUnits().forEach(u => {
      if (this.getIndex(u).includes(target)) {
        filteredUnits.push(u);
      }
    });

    this.units = filteredUnits;
  }

  deleteUnit(unit: Unit) {
    const dialogRef = this.dialog.open(DeletePromptComponent, {
      width: '250px',
      data: {
        shouldDelete: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.shouldDelete) {
        this.unitsService.removeUnit(unit.id);
      }
    });
  }

  addUnit() {
    const dialogRef = this.dialog.open(AddUnitComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.unitsService.addUnit(result);
    });
  }

  editUnit(unit: Unit) {
    const dialogRef = this.dialog.open(AddUnitComponent, {
      width: '250px',
      data: unit
    });

    dialogRef.afterClosed().subscribe(result => {
      this.unitsService.editUnit(result);
    });
  }

  private getIndex(u: Unit): string {
    return `${u.apartmentNumber} ${u.floorNumber} ${u.name.toLowerCase()} ${u.phoneNumber} ${u.email.toLowerCase()}`;
  }

}
