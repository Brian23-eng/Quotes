import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isDelete, index){
    if (isDelete){
      this.quotes.splice(index,1)
    }
  }

  quotes:Quotes [];

  constructor() { 
   this.quotes = [
      new Quotes(1,
       'Life is what happens when you are busy making other plans',
      'John Kennish',
       'Brian Omondi',0),
     new Quotes (2,
       'Be happy for this moment. This Moment is your life',
       'Unknown',
       'Crazy Mind',0),
new Quotes(3,
       'I think being in love with life is a key to eternal youth',
       'Peter Gonzales',
       'Jibril',0),
     new Quotes (4,
         'My mission in life is not merely to survive, but to thrive; and to do so with some passion,some compassion, some humor and some style',
       'Jane Martins',
       'Bontex',0)
    ]
  }

  ngOnInit() {
  }

}
