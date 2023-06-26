interface Comment {

  author: string;
  commentBody: string;

}


export interface Article {

  title: string;
  author: string;
  articleBody: string;
  comments: Array<Comment>;

}
