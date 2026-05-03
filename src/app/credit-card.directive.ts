import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective implements OnInit {

  constructor(
    private _eleref : ElementRef,
    private _rendrer : Renderer2

  ) { }

  @HostListener('input', ['$event'])
  ValidCredentialCard(eve: Event) {
    let inputcontrol = eve.target as HTMLInputElement
    let val = inputcontrol.value.replace(/\s+/g, '')

    if (val.length > 16) {
      val = val.substring(0, 16)
    }
    console.log(val)

    if (/[^\d]/.test(val)) {
      inputcontrol.nextElementSibling?.classList.remove('d-none')
    } else {
      inputcontrol.nextElementSibling?.classList.add('d-none')
    }

    val = this.formatCreditCardval(val)
    inputcontrol.value = val

  }
  ngOnInit(): void {
    // let strong = document.createElement('strong')
    // strong.className= 'text-danger d-none'
    // strong.innerText = 'Plz Enter Valid Value'
    // this._eleref.nativeElement.parentElement.append(strong)

    let strong = this._rendrer.createElement('strong')
    this._rendrer.addClass(strong,'text-danger')
    this._rendrer.addClass(strong,'d-none')
    const msg = this._rendrer.createText(`Plz Enter Valid Value`)
    this._rendrer.appendChild(strong,msg)
    this._rendrer.appendChild(this._eleref.nativeElement.parentElement,strong)
  }



  formatCreditCardval(str: string) {
    let chunkArr: string[] = []
    for (let i = 0; i < str.length; i = i + 4) {
      let v = str.slice(i, i + 4)
      chunkArr.push(v)
    }
    return chunkArr.join(' ')
  }

}
