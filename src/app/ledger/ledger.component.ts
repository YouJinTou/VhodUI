import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Dues {
  month: string;
  isPaid: boolean;
}

export interface Unit {
  apartmentNumber: number;
  floorNumber: number;
  name: string;
  paidForMonth: boolean;
  inhabitantsCount: number;
  hasPets: boolean;
  history: Dues[];
  toPay: number;
  phoneNumber: string;
  email: string;
}

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
  expandedElement: Unit | null;
  columns: string[] = ['name', 'history'];
  units: Unit[] = [
    {
      apartmentNumber: 10,
      floorNumber: 1,
      phoneNumber: '0888 13 21 34',
      email: 'georgi.ivanov@gmail.com',
      name: 'Иванови',
      toPay: 30,
      paidForMonth: false,
      inhabitantsCount: 3,
      hasPets: false,
      history: [
        { month: 'юни', isPaid: true },
        { month: 'юли', isPaid: true },
        { month: 'август', isPaid: true },
        { month: 'септември', isPaid: false },
      ]
    },
    {
      apartmentNumber: 31,
      floorNumber: 3,
      phoneNumber: '0887 21 16 74',
      email: 'petar_georgiev81@abv.bg',
      name: 'Георгиеви',
      toPay: 45,
      paidForMonth: true,
      inhabitantsCount: 4,
      hasPets: true,
      history: [
        { month: 'юни', isPaid: true },
        { month: 'юли', isPaid: false },
        { month: 'август', isPaid: true },
        { month: 'септември', isPaid: true },
      ]
    },
    {
      apartmentNumber: 34,
      floorNumber: 3,
      phoneNumber: '0898 111 213',
      email: 'nikivasileva92@abv.bg',
      name: 'Никололета Василева',
      toPay: 10,
      paidForMonth: false,
      inhabitantsCount: 1,
      hasPets: false,
      history: [
        { month: 'юни', isPaid: true },
        { month: 'юли', isPaid: false },
        { month: 'август', isPaid: true },
        { month: 'септември', isPaid: false },
      ]
    },
    {
      apartmentNumber: 92,
      floorNumber: 13,
      phoneNumber: '0876 299 004',
      email: 'dandreevd@gmail.com',
      name: 'Димитрови',
      toPay: 20,
      paidForMonth: true,
      inhabitantsCount: 2,
      hasPets: false,
      history: [
        { month: 'юни', isPaid: true },
        { month: 'юли', isPaid: true },
        { month: 'август', isPaid: true },
        { month: 'септември', isPaid: true },
      ]
    },
    {
      apartmentNumber: 87,
      floorNumber: 8,
      phoneNumber: '0889 920 132',
      email: 'blagoev_asen01@gmail.com',
      name: 'Асен Благоев',
      toPay: 15,
      paidForMonth: false,
      inhabitantsCount: 1,
      hasPets: true,
      history: [
        { month: 'юни', isPaid: true },
        { month: 'юли', isPaid: false },
        { month: 'август', isPaid: true },
        { month: 'септември', isPaid: false },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
