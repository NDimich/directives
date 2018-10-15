import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) {}

  private _defaultColor;

  @Input('appHighLight') highlightColor: string;
  // можна об'явити приватне поле та встановити його значення безпосередньо в @Input використавши set
  @Input() set defaultColor(value: string) {
    this._defaultColor = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.highlightColor || this._defaultColor || 'olive');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor (color) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }


}
