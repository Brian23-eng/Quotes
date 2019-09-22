import { Component, OnInit, Input } from '@angular/core';
import { Quotes} from '../quotes'
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

@Input() name : QuoteFormComponent;
@Input() description: any;
@Input() submittedBy : any;
id = 7;

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


  quotes:Quotes [] =[
    new Quotes(1,
     'Life is what happens when you are busy making other plans',
    'John Kennish',
     'Brian Omondi',0, 0, new Date(2019,9,3), ),
   new Quotes (2,
     'Be happy for this moment. This Moment is your life',
     'Unknown',
     'Crazy Mind',0, 0, new Date(2019,9,21)),
new Quotes(3,
     'I think being in love with life is a key to eternal youth',
     'Peter Gonzales',
     'Jibril',0, 0, new Date(2019,9,21)),
   new Quotes (4,
       'My mission in life is not merely to survive, but to thrive; and to do so with some passion,some compassion, some humor and some style',
     'Jane Martins',
     'Bontex',0, 0, new Date(2019,9,21))
  ]

  // addNewQuote(quote){
  //   let quoteLength = this.quotes.length;
  //   quote.id = quoteLength+1
  //   quote.name = quote
  //   quote.description = quote
  //   quote.submittedBy = quote
  //   quote.completeDate = new Date(quote.completeDate)
  // //   this.quotes.push(quote)
  // }

  

  addNewQuote(quote){
let quoteLength = this.quotes.length;
quote.id = quoteLength+1;
quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

  

  constructor() { 

  }

  ngOnInit() {
  }

  toggle(){
    this.show = !this.show;

    if(this.show)
    this.details= "Hide details";
    else
    this.details = "Show details"
  }

}
