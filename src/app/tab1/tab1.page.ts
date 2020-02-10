import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  /*
  posts: {
    title: string;
    public_url: string;
    twitter_account: string;
  }[] = [];
  */
  posts: any;

  constructor(
    public http: HttpClient,
  ) { }

  ionViewDidEnter() {
    this.http.get('https://api.moemoe.tokyo/anime/v1/master/2020/1')
      .subscribe(data => {
        this.posts = data
      });
  }
}
