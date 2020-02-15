import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  posts: any;
  url: string = "https://api.moemoe.tokyo/anime/v1/master/"

  constructor(
    public http: HttpClient,
    public actionSheetController: ActionSheetController,
  ) { }

  ionViewDidEnter() {
    this.http.get(this.url + "2020/1")
      .subscribe(data => {
        this.posts = data;
      });
  }

  Change(year, season) {
    //とりあえず解決
    if (typeof year === 'undefined') {
      year = 2020;
    }

    if (typeof season === 'undefined') {
      season = 1;
    }

    console.log("year: " + year + ", season: " + season);

    this.http.get(this.url + year + "/" + season)
      .subscribe(data => {
        this.posts = data;
      });
  }

  async onClick(p) {
    console.log(p.id, p.public_url);

    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      buttons: [
        {
          text: 'Like',
          icon: 'heart',
          handler: () => {
            console.log("Like");
          }
        },
        {
          text: 'Jump Link',
          icon: 'share-alt',
          handler: () => {
            console.log("Jump Link");
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          handler: () => {
            console.log("close");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
