import { Injectable } from '@angular/core';
import { Article } from '../Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[];

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

   addArticle(article: Article) {
    this.articles.push(article);
   }

   addComment(comment: any, articleIndex: number) {
    this.articles[articleIndex].comments.push(comment);
   }

   deleteArticle(index: number) {
    this.articles.splice(index, 1);
   }

   deleteComment(articleIndex: number, commentIndex: number) {

    this.articles[articleIndex].comments.splice(commentIndex, 1);

   }

   modifyComment(newComment: string, articleIndex: number, commentIndex: number) {

    this.articles[articleIndex].comments[commentIndex].commentBody = newComment;

   }

}
