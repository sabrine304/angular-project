import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list-item';

@Component({
  selector: 'app-list-tags-test',
  templateUrl: './list-tags-test.component.html',
  styleUrls: ['./list-tags-test.component.scss']
})
export class ListTagsTestComponent implements OnInit {

  tagsTitle : string = "";
  tagsMaster : string = "";
  tagsItem : any;
  tagsList : ListItem[] = [];
  counter : number = 0;
  constructor() {
   };

  ngOnInit(): void {
  }

  public addTags() {
    this.tagsList.push(this.tagsItem);
    if(this.tagsList.length > 4 ) {
      this.counter++;
    }
  }

  public deleteTags() {
    this.tagsList.pop();
     this.counter--;
  }

}
