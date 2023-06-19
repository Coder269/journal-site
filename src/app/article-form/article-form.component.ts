import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../Services/article.service';
import { Article } from '../Article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  articleService: ArticleService;

constructor(articleService: ArticleService) {

  this.articleService = articleService;

}



  createArticle(form: NgForm){

    let newArticle: Article = {
      title: form.value.title,
      author: form.value.author,
      articleBody: form.value.article,
      comments: [],
    };

    this.articleService.addArticle(newArticle);

  }

}
