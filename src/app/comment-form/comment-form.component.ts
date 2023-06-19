import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../Services/article.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  articleService: ArticleService;

  @Input()
  articleIndex: number = 0;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  createComment(form: NgForm) {
    let newComment = {
      author: form.value.author,
      commentBody: form.value.comment,
    };

    this.articleService.addComment(newComment, this.articleIndex);
  }
}
