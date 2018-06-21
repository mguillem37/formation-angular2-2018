import { Directive, HostListener, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  @Input('color')
  color: string = 'yellow'

  // catch d'évènement sur l'élément qui porte la directive
  @HostListener('mouseenter')
  public onMouseEnter() {
      console.log('onMouseLeave')
      this.startHihglight()
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    console.log('onMouseEnter / color : ' + this.color)
    this.stopHihglight()
  }

   //accès au DOM natif en l'injectant
  constructor(private el: ElementRef) { 
    //accès au DOM du composant el.nativeElement
  }

  private startHihglight() {
    this.el.nativeElement.style.backgroundColor = this.color
    this.el.nativeElement.style.color = 'white'
  }

  private stopHihglight() {
    this.el.nativeElement.style.backgroundColor = 'white'
    this.el.nativeElement.style.color='black'
  }

}
