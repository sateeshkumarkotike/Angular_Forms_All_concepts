import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { Categories } from '../model/categiries.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name:string = "input-data-string";
 eventsArray :{name1:string,name2:string} []= []

 public categories:Categories[] ;

  constructor(private commonService:CommonService) { 

  }

  ngOnInit() {
    this.commonService.basicSubject.subscribe(
      (res) => {
        console.log(res)
      }
    );
    this.getcategories();
  }

  getcategories(){
    this.commonService.getCategories().subscribe(
      (res:Categories[] )=>{
        this.categories = res;
      },
      ( error) =>{
        console.log(error)
      }
    )
  }
  eventfromChild(obj:{name1:string,name2:string}){
    console.log(obj);
    this.eventsArray.push(obj)
  }

  clear(){
    this.eventsArray= []
  }

  navigateToCategory(categoryId:number):void{
    console.log(categoryId)
  }

}
