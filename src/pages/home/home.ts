import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
    {
      imgPath: "iceCream.jpg",
      title: "Ice Creams",
      desc: "Here are some cups of ice cream",
      favorited: false
    },

    {
      imgPath: "cupcakes.jpg",
      title: "Cupcakes",
      desc: "Here are some cupcakes",
      favorited: false
    },

    {
      imgPath: "sundae.jpg",
      title: "Hot Fudge Sundae",
      desc: "Here is a cup of ice cream sundae",
      favorited: false
    }
  ]

  constructor(public navCtrl: NavController) {

  }

  clickFav(card) {
    let index = this.cards.indexOf(card);

    if(index > -1){
      if(card.favorited){
         this.cards[index].favorited = false;
      }else{
        this.cards[index].favorited = true;
      }
    }
  }

}
