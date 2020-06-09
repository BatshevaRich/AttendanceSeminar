import { Directive ,ElementRef,Input,Renderer2,OnInit} from '@angular/core';
import { Schedule } from '../classes/Schedule';

@Directive({
  selector: '[permenent]'
})
export class permenentDirective implements OnInit {

   @Input('permenent') b:Schedule;
 // @Input('substitute') substitute:string= "pink";

  constructor(private el:ElementRef,private re:Renderer2) {
    
    
  }
  ngOnInit(){

    
      this.re.setStyle(this.el.nativeElement, "height","60px"); 
      this.re.setStyle(this.el.nativeElement, "width","60px")
         this.re.setStyle(this.el.nativeElement, "backgroundColor","rgb(250, 205, 204)"); 
  
    
    

  }

}
