import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[advanceCss]'
})
export class cssHighlighterWithRendrerDirective implements OnInit {
    // @HostBinding('innerHTML') innerhtml : string = 'I LOVE Angular'
    @HostBinding('style.backgroundColor') bgcolor : string = 'red'

    constructor(
        private _eleref: ElementRef,
        private _rendrer: Renderer2
    ) 
    { }
    ngOnInit(): void {
        // this._rendrer.setStyle(this._eleref.nativeElement, 'background-color', 'blueviolet')
        // this._rendrer.setStyle(this._eleref.nativeElement, 'color' , '#fff')

        // this._rendrer.addClass(this._eleref.nativeElement,'alert')
        // this._rendrer.addClass(this._eleref.nativeElement,'alert-info')
    }

        @HostListener('mouseover')
        onmouseover(){
            this.bgcolor = 'blueviolet'
            // this._rendrer.setStyle(this._eleref.nativeElement, 'background-color','blueviolet')
            // this._rendrer.setStyle(this._eleref.nativeElement ,'padding','10px')
        }
        @HostListener('mouseout')
        onmouseout(){
            this._rendrer.setStyle(this._eleref.nativeElement,'background-color', 'transparent')
        }



    }

