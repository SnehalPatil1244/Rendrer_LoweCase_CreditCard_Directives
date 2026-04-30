import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostListener('input',['$event'])
  ValidCredentialCard(eve : Event){
    let inputcontrol = eve.target as HTMLInputElement
    let val = inputcontrol.value.replace(/\s+/g, '')

    if(val.length > 16){
      val = val.substring(0,16)
    }
    console.log(val)
    inputcontrol.value = val
  }

}
