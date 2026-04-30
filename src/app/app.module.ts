import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cssHighlighterDirective } from './Shared/Directives/cssHighLighter.directive';
import { cssHighlighterWithRendrerDirective } from './Shared/Directives/cssHighlighterWithRendrer.directive';
import { LowerCaseDirective } from './lower-case.directive';
import { CreditCardDirective } from './credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    cssHighlighterDirective,
    cssHighlighterWithRendrerDirective,
    LowerCaseDirective,
    CreditCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
