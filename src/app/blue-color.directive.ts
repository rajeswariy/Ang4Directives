import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColorDirective {

  constructor(element : ElementRef) { 
    element.nativeElement.style.color="blue";
  }
  //es7 decorators
  
// @HostListener('click') doSomething(){
//   alert('it works');
// }
// @HostListener('mouseenter') doSomethingmouse(){
//   alert('it works mouse');
// }
// @HostListener('mouseleave') doSomethingmole(){
//   alert('it works mouseleave');
// }
//  @HostListener('mousemove') doSomethingmove(){
//   alert('it works mousemove');
// }
}
