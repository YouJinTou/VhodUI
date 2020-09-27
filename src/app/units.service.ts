import { Injectable } from '@angular/core';
import { Unit } from './models/unit';

const UNITS: Unit[] = [
  {
    id: 'abc',
    apartmentNumber: '10',
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
    id: 'aww',
    apartmentNumber: '31',
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
    id: 'qqq',
    apartmentNumber: '34',
    floorNumber: 3,
    phoneNumber: '0898 111 213',
    email: 'nikivasileva92@abv.bg',
    name: 'Николета Василева',
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
    id: 'sadsda',
    apartmentNumber: '92',
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
    id: 'fsdfags',
    apartmentNumber: '87',
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

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor() { }

  getUnits(): Unit[] {
    return UNITS;
  }

  addUnit(unit: Unit) {
    if (unit) {
      unit.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

      UNITS.push(unit);
    }
  }

  editUnit(unit: Unit) {
    if (unit) {
      let idx = UNITS.findIndex(u => u.id == unit.id);

      UNITS[idx] = unit;
    }
  }

  removeUnit(id: string) {
    let idx = UNITS.findIndex(u => u.id == id);

    UNITS.splice(idx, 1);
  }
}
