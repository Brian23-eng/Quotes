import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public show:boolean = false;
  public details: any = 'Show';

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete the  Quote?`)

      if(toDelete){
        this.quotes.splice(index,1)
      }
     
    }
  }


  quotes:Quotes [];

  constructor() { 
   this.quotes = [
      new Quotes(1,
       'Life is what happens when you are busy making other plans',
      'John Kennish',
       'Brian Omondi',0, new Date(2019,9,3), ),
     new Quotes (2,
       'Be happy for this moment. This Moment is your life',
       'Unknown',
       'Crazy Mind',0, new Date(2019,9,21)),
new Quotes(3,
       'I think being in love with life is a key to eternal youth',
       'Peter Gonzales',
       'Jibril',0, new Date(2019,9,21)),
     new Quotes (4,
         'My mission in life is not merely to survive, but to thrive; and to do so with some passion,some compassion, some humor and some style',
       'Jane Martins',
       'Bontex',0, new Date(2019,9,21))
    ]
  }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;

    if(this.show)
    this.details = "Hide details";
    else
    this.details = "Show details"
  }

}
