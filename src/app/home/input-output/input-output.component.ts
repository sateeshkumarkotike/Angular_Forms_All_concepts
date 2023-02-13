import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

   @Input('inputString') input:string ;
   name1:string;
   name2:string;

   @Output() clikcedEvent = new EventEmitter<{name1:string,name2:string}>()

  constructor(private commonService:CommonService) { 

  }

  ngOnInit() {

  }

  onClick(){
    this.commonService.basicSubject.next({name:"sateesh",sal:100000})
   this.clikcedEvent.emit({name1:this.name1,name2:this.name2});
  }

}
