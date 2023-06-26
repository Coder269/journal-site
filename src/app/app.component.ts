import { Component, OnInit } from '@angular/core';
import { Article } from './Article';
import { ArticleService } from './Services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articles!: Article[];
  articleService: ArticleService;
  modifyComment = false;

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

  onModifyComment(articleIndex: number, commentIndex: number) {
    if (!this.modifyComment) {
      this.modifyComment = true;
    } else if (this.modifyComment) {
      let textArea = document.getElementById('textArea') as HTMLInputElement;
      let newComment = textArea.value;
      this.articleService.modifyComment(newComment, articleIndex, commentIndex);
      this.modifyComment = false;
    }
  }
}
