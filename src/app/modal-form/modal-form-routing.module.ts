import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaleFormPage } from './modal-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModaleFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormPageRoutingModule {}
