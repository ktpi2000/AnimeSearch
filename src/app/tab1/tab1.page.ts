import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
