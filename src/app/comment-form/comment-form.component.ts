import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  @Output()
  createCommentEvent = new EventEmitter<NgForm>()

  @Output()
  articleIndexEvent = new EventEmitter<number>()

  @Input()
  articleIndex: number = 0;



  createComment(form: NgForm){


    this.articleIndexEvent.emit(this.articleIndex);
    this.createCommentEvent.emit(form);


  }

}
