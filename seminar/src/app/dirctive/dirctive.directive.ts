import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { Schedule } from '../classes/Schedule';

@Directive({
  selector: '[permenent]'
})
export class permenentDirective implements OnInit {

  @Input('permenent') b: Schedule;
  // @Input('substitute') substitute:string= "pink";

  constructor(private el: ElementRef, private re: Renderer2) {


  }
  ngOnInit() {

    this.re.setStyle(this.el.nativeElement, '-webkit-appearance', 'textfield');
    this.re.setStyle(this.el.nativeElement, 'padding', '2px');
    this.re.setStyle(this.el.nativeElement, 'border', '4px inset');
    this.re.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.re.setStyle(this.el.nativeElement, 'height', '65px');
    this.re.setStyle(this.el.nativeElement, 'width', '85px');
    this.re.setStyle(this.el.nativeElement, 'backgroundColor', 'rgb(250, 205, 204)');




  }

}
