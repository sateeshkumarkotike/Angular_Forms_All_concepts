import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/posts.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public posts:Posts[] = []

  constructor(private commonService:CommonService) { }

  ngOnInit() {

    this.commonService.getPosts().subscribe(
      (res) => {
        console.log(res)
        this.posts = res;

      },
      (error) => {
        console.log(error)
      }
    )
  }

}
