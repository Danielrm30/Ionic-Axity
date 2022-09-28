import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModaleFormPage implements OnInit {
  name: string;
  constructor(
    private modalControler:ModalController
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.modalControler.dismiss(null,"cancel");
  }

  confirm(){
    this.modalControler.dismiss(this.name,"confirm");
  }

}

