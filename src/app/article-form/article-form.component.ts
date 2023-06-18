import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {

  @Output()
  createFormEvent = new EventEmitter<NgForm>();



  createArticle(form: NgForm){

this.createFormEvent.emit(form);

  }

}
