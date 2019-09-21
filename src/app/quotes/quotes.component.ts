import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes []

  constructor() { 
   this.quotes = [
      {id:1,
       name:'Life is what happens when you are busy making other plans',
      description:'John Kennish',
    submittedBy:'Brian Omondi'},
      {id:2,
       name:'Be happy for this moment. This Moment is your life',
       description:'Unknown',
       submittedBy:'Crazy Mind'},
      {id:3,
       name:'I think being in love with life is a key to eternal youth',
       description:'Peter Gonzales',
       submittedBy:'Jibril'},
      {id:4,
         name:'My mission in life is not merely to survive, but to thrive; and to do so with some passion,some compassion, some humor and some style',
       description:'Jane Martins',
       submittedBy:'Bontex'}
    ]
  }

  ngOnInit() {
  }

}
