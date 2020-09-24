import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: 'dashboard', component: OverviewComponent },
  { path: 'ledger', component: LedgerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }