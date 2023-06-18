import { Component } from '@angular/core';
import { Article } from './Article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[];
  articleIndex: number = 0;

  constructor() {
    this.articles = [
      {
        title: 'Sample Article 1',
        author: 'Zaher Abbas',
        articleBody:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus in massa tempor. Vel eros donec ac odio tempor orci. Adipiscing tristique risus nec feugiat in. Auctor augue mauris augue neque. Augue eget arcu dictum varius duis at consectetur lorem. Posuere ac ut consequat semper viverra nam. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam.',
        comments: [
          {
            author: 'Majdi',
            commentBody: 'bla bla bla',
          },
        ],
      },
    ];
  }

  onCreateArticle(form: NgForm) {
    let newArticle: Article = {
      title: '',
      author: '',
      articleBody: '',
      comments: [],
    };

    newArticle.title = form.value.title;
    newArticle.author = form.value.author;
    newArticle.articleBody = form.value.article;
    this.articles.push(newArticle);
  }

  onCreateComment(form: NgForm) {
    let newComment = {
      author: '',
      commentBody: '',
    };

    newComment.author = form.value.author;
    newComment.commentBody = form.value.comment;
    this.articles[this.articleIndex].comments.push(newComment);
  }

  getArticleIndex(index: number) {
    this.articleIndex = index;
  }
}
