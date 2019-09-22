import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isDelete.emit(complete);

  }

  constructor() { }

  ngOnInit() {
  }

}
