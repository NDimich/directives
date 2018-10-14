import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) {}

  @Input('appHighLight') inputColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.inputColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor (color) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }


}
