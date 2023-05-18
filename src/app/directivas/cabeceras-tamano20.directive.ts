import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCabecerasTamano20]'
})
export class CabecerasTamano20Directive implements OnInit{

  constructor(  
    private element: ElementRef,
    private renderer: Renderer2
  ){ }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, "font-size", "20px")
    this.renderer.setStyle(this.element.nativeElement, "color", "#8b8a8a")
  }
}
