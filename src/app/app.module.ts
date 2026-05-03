import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { cssHighlighterDirective } from './Shared/Directives/cssHighLighter.directive';
import { cssHighlighterWithRendrerDirective } from './Shared/Directives/cssHighlighterWithRendrer.directive';
import { LowerCaseDirective } from './lower-case.directive';
import { CreditCardDirective } from './credit-card.directive';
import { AdharCardDirective } from './Shared/Directives/Adhar-card.directive';
import { PanCardDirective } from './Shared/Directives/PAN-Card.directive';

@NgModule({
  declarations: [
    AppComponent,
    cssHighlighterDirective,
    cssHighlighterWithRendrerDirective,
    LowerCaseDirective,
    CreditCardDirective,
    AdharCardDirective,
    PanCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
