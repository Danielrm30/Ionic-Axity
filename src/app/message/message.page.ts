import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ToastController, ModalController, AlertOptions, ToastOptions, ModalOptions, IonModal } from '@ionic/angular';
import { ModaleFormPage } from '../modal-form/modal-form.page';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  radio: string;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  constructor(private alertController: AlertController,
    private toastController: ToastController,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async showAlert() {
    const options: AlertOptions = {
      header: 'Cerrar sesión',
      message: '¿Desea cerrar sesión?',
      buttons: [{
        text: 'Si',
        handler: () => { console.log('SI') }
      },
      {
        text: 'No',
        role: 'cancel',
        handler: () => { console.log('NO') }
      }],
    }
    const alert = await this.alertController.create(options);
    alert.present();
    /*this.alertController.create(options).then(alertCtrl => {
      alertCtrl.present();
    })*/
  }

  showToast(position: 'top' | 'middle' | 'bottom') {
    const options: ToastOptions = {
      position,
      message: 'Se cerro la sesión correctamente',
      buttons: [{
        text: 'Ok',
        handler: () => { console.log('OK') }
      }],
    }
    //const toast = await this.toastController.create(options);
    //toast.present();
    this.toastController.create(options).then(toastCtrl => {
      toastCtrl.present();
    })
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  async showModal() {
    const options: ModalOptions = {
      component: ModaleFormPage,
      cssClass: 'name-modal'
    }
    const modal = await this.modalController.create(options);
    modal.present();
    modal.onDidDismiss().then(ev => {
      if (ev.role === 'confirm') {
        this.message = `Hello, ${ev.data}!`;
      }
    });
    /*this.modalController.create(options).then(modalCtrl => {
      modalCtrl.present();
      modalCtrl.onDidDismiss().then(ev => {
        if (ev.role === 'confirm') {
          this.message = `Hello, ${ev.data}!`;
        }
      });
    })*/
  }
}

