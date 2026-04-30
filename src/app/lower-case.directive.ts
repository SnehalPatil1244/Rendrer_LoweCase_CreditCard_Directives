import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {


  constructor(
    private _eleref: ElementRef,
    private _rendrer: Renderer2
  ) 
  { }

  @HostListener('keyup')
  onsearch(){
    let val = (this._eleref.nativeElement.value as string).toLowerCase()
    console.log(val)
    // this._eleref.nativeElement.value = val
    this._rendrer.setProperty(this._eleref.nativeElement,'value',val)
  }

  @HostListener('keyup', ['$event'])
  onSearch(eve : Event){
    let inputcontrol = (eve.target as HTMLInputElement)
    let val = inputcontrol.value.toLowerCase()
    inputcontrol.value = val
    console.log(inputcontrol)

  }



}
