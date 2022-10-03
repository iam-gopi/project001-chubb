import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AdddComponent } from './components/addd/addd.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add', component: AdddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
