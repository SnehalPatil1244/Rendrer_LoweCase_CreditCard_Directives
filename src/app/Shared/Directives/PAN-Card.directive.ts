import { ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";



export  class PanCardDirective implements OnInit {
    constructor(
        private _eleref : ElementRef,
        private _rendrer : Renderer2
    ){}

    @HostListener('input',['$event'])
    validCredentialcard(eve : Event){
        let  inputcontrol = eve.target as HTMLInputElement
        let val = inputcontrol.value.replace(/\s+/g, '')

        if(val.length > 10){
            val = val.substring(0,10)
        }

        if(/[^\d]/.test(val)){
            inputcontrol.nextElementSibling?.classList.remove('d-none')
        }else{
            inputcontrol.nextElementSibling?.classList.add('d-none')
        }
        val = this.formatpancardval(val)
        inputcontrol.value = val
    }

    ngOnInit(): void {
        let strong = this._rendrer.createElement('strong')
        this._rendrer.addClass( strong ,'text-danger')
        this._rendrer.addClass( strong,'d-none')
        let msg =  this._rendrer.createText('Plz Enter Valid Value')
        this._rendrer.appendChild(strong,msg)
        this._rendrer.appendChild(this._eleref.nativeElement.parentElement,strong)

    }

    formatpancardval(str : string){
        let chunkArr : String[] =  []
        for(let i = 0 ; i < str.length; i = i + 4){
            let v = str.slice(i,i + 4)
            chunkArr.push(v)
        }
        return chunkArr.join(' ')
    }

    

}