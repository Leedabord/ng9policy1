import { Component } from '@angular/core';

import { quotes } from '../models';

@Component({
  selector: 'app-quote',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  quotes = quotes;

  share() {
    window.alert('The quote has been tagged!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/