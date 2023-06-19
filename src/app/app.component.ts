import { Component, OnInit } from '@angular/core';
import { Article } from './Article';
import { NgForm } from '@angular/forms';
import { ArticleService } from './Services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles!: Article[];
  articleService: ArticleService;

  constructor(articleService: ArticleService) {

    this.articleService = articleService;

  }
  ngOnInit(): void {
   this.articles = this.articleService.articles;
  }

  onDeleteArticle(index: number) {

    this.articleService.deleteArticle(index);
  }

  onDeleteComment(articleIndex: number, commentIndex: number) {

    this.articleService.deleteComment(articleIndex, commentIndex);

  }

}
