import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'What we think, we become.', 'Buddha', 'Mike', new Date(2000,3,30)),
    new Quote(2, 'Change the world by being yourself.', 'Amy Poehler', 'Rodrigez', new Date(2016,5,20)),
    new Quote(3, 'Everything you can imagine is real.', 'T.S Eliot', 'Milik', new Date(2005,0,10)),
    new Quote(4, 'Whatever you do, do it well.', 'Walt Disney', 'Abdul', new Date(1990,6,1)),
    new Quote(5, 'Die with memories, not dreams.', 'Unkown', 'Kamau', new Date(2011,11,15)),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
