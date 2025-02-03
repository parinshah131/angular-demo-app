import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  @Input() hoverColor: string = 'lightgray';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listens for the mouse entering the element.
  @HostListener('mouseenter') onMouseEnter() {
    
    // Changes the background color to the specified hover color.
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.hoverColor);
  }

  // Listens for the mouse leaving the element.
  @HostListener('mouseleave') onMouseLeave() {

    // Removes the background color when the mouse leaves the element.
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
