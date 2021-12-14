import { Component, OnInit } from '@angular/core';
import { FavoriteVotersService } from 'src/services/favorite-voters.service';
import { Voter } from 'src/services/voter.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
   public favoriteVoters: Voter[] = [];

  constructor(public favoriteVotersService: FavoriteVotersService, public alertController: AlertController) {}

  ngOnInit(){
    this.favoriteVotersService.favoriteVoters$.subscribe(voters => {
      this.favoriteVoters = voters;
    });
  }
  async showFullInfo(uuid: string) {
    let chosenVoter;
    this.favoriteVoters.find((voter) => {
        if (voter.uuid === uuid) {
          chosenVoter = voter;
        }
      });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Voter full info',
      message: '<p>' + chosenVoter.name + '</p>' +
      '<p>' + 'email:' + chosenVoter.email + '</p>' +
      '<p>' + 'gender:' + chosenVoter.gender + '</p>' +
      '<p>' + 'dob:' +chosenVoter.birthDate + '</p>' +
      '<p>' + 'age:' + chosenVoter.age + '</p>',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  onCheckboxChange(event: any, voter: Voter) {
    if(!event.target.checked) {
      this.favoriteVotersService.addFavoriteVoter(voter);
    }
    else {
      this.favoriteVotersService.removeFavoriteVoter(voter);
    }
  }
}
