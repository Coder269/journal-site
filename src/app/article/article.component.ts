import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {


  @Input()
  title: string = "";

  @Input()
  author: string = "";

  @Input()
  articleBody: string = "";

  comments: Comment[];

  constructor() {

    this.comments = [];
  }

}
